import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { AuthStatus, type User } from '../interfaces';
import { checkAuthAction, loginAction } from '../actions';
import { useLocalStorage } from '@vueuse/core';
import { registerAction } from '../actions/register.action';

export const useAuthStore = defineStore('auth', () => {
  // Authenticated, unAuthebticate, Checking
  const authStatus = ref(AuthStatus.Checking);
  const user = ref<User | undefined>();
  const token = ref(useLocalStorage('token', ''));

  const login = async (email: string, password: string) => {
    try {
      const loginResponse = await loginAction(email, password);
      if (!loginResponse.ok) {
        logout();
        return false;
      }

      user.value = loginResponse.user;
      token.value = loginResponse.token;
      authStatus.value = AuthStatus.Authenticated;

      return true;
    } catch (error) {
      console.log(error);
      return logout();
    }
  };

  const logout = () => {
    localStorage.removeItem('token');

    authStatus.value = AuthStatus.Unauthenticated;
    user.value = undefined;
    token.value = '';

    console.log('');
    return false;
  };

  const checkAuthStatus = async (): Promise<boolean> => {
    try {
      const statusResp = await checkAuthAction();

      if (!statusResp.ok) {
        logout();
        return false;
      }

      authStatus.value = AuthStatus.Authenticated;
      user.value = statusResp.user;
      token.value = statusResp.token;

      return true;
    } catch (error) {
      logout();
      return false;
    }
  };

  const register = async (fullName: string, email: string, passwd: string) => {
    const registerResponse = await registerAction(fullName, email, passwd);

    try {
      if (!registerResponse.ok) {
        logout();
        return false;
      }

      user.value = registerResponse.user;
      token.value = registerResponse.token;
      authStatus.value = AuthStatus.Authenticated;

      return true;
    } catch (error) {
      console.log(error);
      return logout();
    }
  };

  return {
    user,
    token,
    authStatus,

    // Getters
    isChecking: computed(() => authStatus.value === AuthStatus.Checking),
    isAuthenticated: computed(() => authStatus.value === AuthStatus.Authenticated),
    isUnauthenticated: computed(() => authStatus.value === AuthStatus.Unauthenticated),

    // Todo: getter para saber si es admin o no
    isAdmin: computed(() => user.value?.roles.includes('admin') ?? false),
    username: computed(() => user.value?.fullName),

    // Actions
    login,
    logout,
    register,
    checkAuthStatus,
  };
});
