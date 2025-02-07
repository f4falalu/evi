import Image from "next/image";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/lotus.png"
        alt="Logo"
        width={100} 
        height={100}
        className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
        priority
      />
    </div>
  );
};

export default Logo;
