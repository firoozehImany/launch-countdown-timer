import { THEME_ICONS } from '../constants/icons';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const { path, name } = isDark ? THEME_ICONS.light : THEME_ICONS.dark;

  return (
    <button 
      onClick={toggleTheme}
      className="absolute top-8 right-8 z-50 cursor-pointer hover:scale-110 active:scale-95 transition-transform"
      aria-label={name}
    >
      <div 
        className="w-7 h-7 bg-stella hover:bg-core transition-all duration-300 icon-mask"
        style={{ '--icon-path': `url(${path})` }}
      />
    </button>
  );
}