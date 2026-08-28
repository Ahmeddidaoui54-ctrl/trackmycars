import Image from "next/image";

/**
 * Fond vidéo du hero, repris du site actuel.
 *
 * Le poster est une vraie image optimisée servie par next/image : il s'affiche
 * immédiatement pendant que la vidéo se charge, donc le texte est lisible dès
 * la première frame. La vidéo se pose par-dessus une fois prête.
 *
 * `preload="metadata"` évite de tirer 1,3 Mo avant que la page soit utilisable,
 * et la balise entière est retirée du rendu pour qui a demandé moins
 * d'animations — le poster suffit alors.
 */
export function HeroVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <Image
        src="/video/hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/video/hero-poster.jpg"
      >
        {/* Sur mobile, aucune source ne correspond : le navigateur ne
            télécharge rien et laisse le poster. 1,3 Mo économisés en 4G. */}
        <source src="/video/hero.mp4" type="video/mp4" media="(min-width: 768px)" />
      </video>
      {/* Voile sombre : le texte doit rester lisible quelle que soit l'image */}
      <div className="absolute inset-0 bg-primary/78" />
    </div>
  );
}
