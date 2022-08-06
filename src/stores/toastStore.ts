import type { Toast, ToastType } from 'src/types';
import { writable } from 'svelte/store';

export const toast = writable<Toast>({});

export function triggerToast(message: string, type: ToastType = 'default') {
	toast.set({ type, message });
	resetToast();
}

export function resetToast() {
	setTimeout(() => toast.set({}), 1500);
}
