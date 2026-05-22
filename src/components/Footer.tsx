export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-muted">
          <span className="text-accent">~/</span>raghu.dev — Built with Next.js & Tailwind CSS
        </div>
        <div className="font-mono text-xs text-muted">
          Raghu Manohar Sakuru · Sunnyvale, CA · {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
