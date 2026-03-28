import { THEME_ICON } from '../constants/icons';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { path, name } = THEME_ICON;
  const { toggleTheme } = useTheme();

  return (
    <button 
      type="button"
      aria-label={name}
      onClick={toggleTheme}
      className="absolute top-8 right-8 z-50 group cursor-pointer transition-transform hover:scale-110 active:scale-95"
    >
      <div 
        className="w-6 h-6 md:w-8 md:h-8 bg-stella hover:bg-core transition-colors icon-mask"
        style={{ '--icon-path': `url(${path})` }}
      />
    </button>
  );
}