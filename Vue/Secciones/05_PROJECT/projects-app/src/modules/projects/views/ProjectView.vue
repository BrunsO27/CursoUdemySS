<template>
  <BreadCrumbs :name="project?.name ?? 'No name'" />
</template>

<script lang="ts" setup>
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectsStore } from '../stores/projects.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces/project.interface';

interface Props {
  id: string;
}

const props = defineProps<Props>();
const projectStore = useProjectsStore();
const project = ref<Project | null>();

//const project = projectStore.projectsList.find((project) => project.id === props.id);

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectsList.find((project) => project.id === props.id);
  },
  {
    immediate: true,
  },
);
</script>
