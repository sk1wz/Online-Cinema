import { Album, CircleHelp, Headset, Heart, House, LogOut, SatelliteDish, Settings, Star, Trophy, Tv } from 'lucide-react';
export const menuItems = [
    {
      block: 'Menu',
      title: 'Меню',
      items: [
        { icon: <House width={20} height={20} />, text: 'Главная', link: '/' },
        { icon: <Tv width={20} height={20} />, text: 'Просмотр', link: '/view' },
        { icon: <Trophy width={20} height={20} />, text: 'Тренды', link: '/trends'}
      ]
    },
    {
      block: 'Library',
      title: 'Библиотека',
      items: [
        { icon: <SatelliteDish width={20} height={20} />, text: 'Недавние', link: '/recently' },
        { icon: <Star width={20} height={20} />, text: 'Рейтинг', link: '/ratings' },
        { icon: <Heart width={20} height={20} />, text: 'Понравившиеся', link: '/favorites' }
      ]
    },
    {
      block: 'add',
      title: 'Дополнительно',
      items: [
        { icon: <CircleHelp width={20} height={20} />, text: 'Часто задаваемые', link: '/faq' },
        { icon: <Album width={20} height={20} />, text: 'Памятка', link: '/remind' },
        { icon: <Headset width={20} height={20} />, text: 'Поддержка', link: '/help' }
      ]
    },
    {
      block: 'General',
      title: 'Основные',
      items: [
        { icon: <Settings width={20} height={20} />, text: 'Настройки', link: '/settings' },
        { icon: <LogOut width={20} height={20} />, text: 'Выход', link: '/logout' }
      ]
    }
  ];



