interface LogoProps {
  className?: string;
  onClick?: () => void;
}

const Logo = ({ className = "", onClick }: LogoProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 hover:text-primary transition-colors group ${className}`}
    >
      {/* Custom Logo Icon */}
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
          <span className="text-white font-bold text-lg">AG</span>
        </div>
        {/* Accent dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-background"></div>
      </div>
      
      {/* Name */}
      <div className="flex flex-col items-start">
        <span className="text-xl font-bold tracking-tight leading-none">
          Akshay Gangurde
        </span>
        <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
          Developer
        </span>
      </div>
    </button>
  );
};

export default Logo;