import { type ClassValue, clsx } from "clsx"
import { toast } from "sonner"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleError(){
  toast("Функция не доступна",{
    description: "В данный момент функция не работает, либо она отключена!", action: {
      label: "Хорошо",
      onClick: () => console.log("Хорощо"),
    },
}
)}