import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="Dulhan Exclusives Home">
  {/* Add items-end to right-align the text */}
  <div className="flex flex-col leading-tight items-end"> 
    <span className="text-xl font-bold tracking-tight font-headline text-primary">
      Dulhan Exclusives
    </span>
    {/* Remove the pl-14, it's no longer needed */}
    <span className="text-base font-medium text-primary italic">
      by Isha Fashions
    </span>
  </div>
</Link>

  );
}
