import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

/* const initialLoad = (): Project[] => {
  return [
    {
      id: uuidv4(),
      name: 'Project 1',
      tasks: [],
    },
    {
      id: uuidv4(),
      name: 'Project 2',
      tasks: [],
    },
  ];
}; */

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', [] /* initialLoad() */));

  const addProject = (projectName: string) => {
    if (projectName.length === 0) {
      return;
    }

    projects.value.push({
      id: uuidv4(),
      name: projectName,
      tasks: [],
    });
  };

  const addTaskToProject = (projectId: string, nameTask: string) => {
    if (!projects.value.find((projects) => projects.id === projectId)) return;

    if (nameTask === null) return;

    const project = projects.value.find((projects) => projects.id === projectId);

    project?.tasks.push({
      id: uuidv4(),
      name: nameTask,
      //completedAt: new Date(),
    });
  };

  const toogleTask = (projecId: string, taskId: string) => {
    const project = projects.value.find((project) => project.id === projecId);

    if (!project) return;

    const task = project.tasks.find((task) => task.id === taskId);
    if (!task) return;

    task.completedAt = task.completedAt ? undefined : new Date();
  };

  // const getTask = (projectId: string) => {
  //   const project = projects.value.find((projects) => projects.id === projectId);
  //   if (!project) return;

  //   return project.tasks;
  // };

  return {
    // PropertiesS
    projects,

    // Getters
    projectsList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),
    projectsWithCompletion: computed(() => {
      return projects.value.map((project) => {
        const total = project.tasks.length;
        const completed = project.tasks.filter((task) => task.completedAt).length;
        const completion = total === 0 ? 0 : (completed / total) * 100;

        return {
          id: project.id,
          name: project.name,
          taskCount: total,
          completion: completion,
        };
      });
    }),
    //getTask,

    // Actions
    addProject,
    addTaskToProject,
    toogleTask,
  };
});
