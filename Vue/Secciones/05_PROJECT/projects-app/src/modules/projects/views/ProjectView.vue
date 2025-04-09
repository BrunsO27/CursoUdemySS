<template>
  <div class="w-full">
    <section class="m-2">
      <BreadCrumbs :name="project?.name ?? 'No name'" />
    </section>

    <section>
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Completada</th>
              <th>Tarea</th>
              <th>Completada En</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 2 -->
            <tr v-for="(task, index) in project?.tasks" :key="task.id" class="hover:bg-base-300">
              <th>{{ index + 1 }}</th>
              <td>{{ task.name }}</td>
              <td>{{ task.completedAt || 'Pendiente' }}</td>
            </tr>

            <tr class="hover:bg-base-300">
              <th></th>
              <td>
                <input
                  v-model="inputTask"
                  type="text"
                  @keyup.enter="addTask"
                  class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                  placeholder="Nueva tarea"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectsStore } from '../stores/projects.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { useRouter } from 'vue-router';

interface Props {
  id: string;
}

const router = useRouter();
const props = defineProps<Props>();
const projectStore = useProjectsStore();
const project = ref<Project | null>();

const inputTask = ref('');

//const project = projectStore.projectsList.find((project) => project.id === props.id);

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectsList.find((project) => project.id === props.id);
    if (!project.value) {
      router.replace('/');
    }
  },
  {
    immediate: true,
  },
);

const addTask = () => {
  if (!inputTask.value) return;

  projectStore.addTaskToProject(project.value.id, inputTask.value);
  inputTask.value = '';
};
</script>
