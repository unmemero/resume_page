import * as LucideIcons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function DynamicIcon({ name, size = 20, className = '' }: DynamicIconProps) {
  const Icon = LucideIcons[name as keyof typeof LucideIcons] as any;
  
  if (!Icon) {
    return null;
  }
  
  return <Icon size={size} className={className} />;
}
