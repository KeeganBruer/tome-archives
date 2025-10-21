import { Link as LinkIcon, Globe, FolderOpen, ArrowUpRight } from 'lucide-react';

export default function LinkingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          <LinkIcon className="h-4 w-4" />
          Linking & Paths
        </div>
        <p className="text-muted-foreground">
          How links and file paths are resolved within .tome archives.
        </p>
      </div>

      <div className="space-y-8">
        {/* Relative Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FolderOpen className="h-5 w-5 text-primary" />
            Relative Links
          </h2>
          <div className="bg-muted/50 border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Links that don&apos;t start with a protocol (like <code className="bg-background px-1.5 py-0.5 rounded">http://</code>) or
              domain name are treated as relative paths within the tome archive. These links always resolve from the
              root of the archive.
            </p>

            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-sm mb-2">Examples:</h4>
                <div className="bg-background rounded border p-3 text-xs font-mono space-y-2">
                  <div>
                    <span className="text-muted-foreground">{'//'} Links to content.html at the archive root</span>
                    <div className="text-primary">&quot;content.html&quot;</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{'//'} Links to page-01.jpg inside the pages directory</span>
                    <div className="text-primary">&quot;pages/page-01.jpg&quot;</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{'//'} Links to style.css inside the assets/css directory</span>
                    <div className="text-primary">&quot;assets/css/style.css&quot;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* External Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            External Links / Protocol Detection
          </h2>
          <div className="bg-muted/50 border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Links that start with a protocol are treated as external links and will open outside the tome archive.
              Common protocols include:
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <code className="bg-background px-2 py-1 rounded font-mono">http://</code>
                <span className="text-muted-foreground">Standard web links</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <code className="bg-background px-2 py-1 rounded font-mono">https://</code>
                <span className="text-muted-foreground">Secure web links</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <code className="bg-background px-2 py-1 rounded font-mono">ftp://</code>
                <span className="text-muted-foreground">File transfer protocol links</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <code className="bg-background px-2 py-1 rounded font-mono">mailto:</code>
                <span className="text-muted-foreground">Email links</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <code className="bg-background px-2 py-1 rounded font-mono">file://</code>
                <span className="text-muted-foreground">Local file system links</span>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium text-sm mb-2">Examples:</h4>
              <div className="bg-background rounded border p-3 text-xs font-mono space-y-2">
                <div>
                  <span className="text-muted-foreground">{'//'} Opens in web browser</span>
                  <div className="text-primary">&quot;https://example.com/info&quot;</div>
                </div>
                <div>
                  <span className="text-muted-foreground">{'//'} Opens email client</span>
                  <div className="text-primary">&quot;mailto:author@example.com&quot;</div>
                </div>
                <div>
                  <span className="text-muted-foreground">{'//'} Opens FTP client</span>
                  <div className="text-primary">&quot;ftp://ftp.example.com/file.zip&quot;</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Root-Relative Paths */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ArrowUpRight className="h-5 w-5 text-primary" />
            Root-Relative Paths
          </h2>
          <div className="bg-muted/50 border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Paths starting with a forward slash (<code className="bg-background px-1.5 py-0.5 rounded">/</code>) are
              considered root-relative and always resolve from the root of the tome archive.
            </p>

            <div className="bg-background rounded border p-3 text-xs font-mono space-y-2">
              <div>
                <span className="text-muted-foreground">{'//'} Same as &quot;images/cover.jpg&quot;</span>
                <div className="text-primary">&quot;/images/cover.jpg&quot;</div>
              </div>
              <div>
                <span className="text-muted-foreground">{'//'} Same as &quot;content/chapter1.html&quot;</span>
                <div className="text-primary">&quot;/content/chapter1.html&quot;</div>
              </div>
            </div>

            <div className="mt-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-4">
              <p className="text-xs text-blue-900 dark:text-blue-100">
                <strong>Note:</strong> Since all relative links resolve from the archive root, there&apos;s usually
                no practical difference between paths with and without a leading slash. However, using the leading
                slash can make it clearer that you&apos;re referencing from the root.
              </p>
            </div>
          </div>
        </div>

        {/* Parent Directory References */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Parent Directory References</h2>
          <div className="bg-muted/50 border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-4">
              You can use <code className="bg-background px-1.5 py-0.5 rounded">../</code> to reference parent directories,
              though this is less common since all paths resolve from the root.
            </p>

            <div className="bg-background rounded border p-3 text-xs font-mono space-y-2">
              <div>
                <span className="text-muted-foreground">{'//'} From &quot;content/chapter1.html&quot;, links to &quot;images/pic.jpg&quot;</span>
                <div className="text-primary">&quot;../images/pic.jpg&quot;</div>
              </div>
              <div>
                <span className="text-muted-foreground">{'//'} From &quot;content/parts/part1.html&quot;, links to &quot;content/toc.html&quot;</span>
                <div className="text-primary">&quot;../toc.html&quot;</div>
              </div>
            </div>

            <div className="mt-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg p-4">
              <p className="text-xs text-amber-900 dark:text-amber-100">
                <strong>Best Practice:</strong> For clarity and simplicity, prefer using paths from the root
                (e.g., <code className="bg-background px-1.5 py-0.5 rounded">&quot;images/pic.jpg&quot;</code>) rather than relative
                parent references.
              </p>
            </div>
          </div>
        </div>

        {/* Link Resolution Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Link Resolution Summary</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-3 text-sm font-semibold">Link Example</th>
                  <th className="text-left p-3 text-sm font-semibold">Type</th>
                  <th className="text-left p-3 text-sm font-semibold">Resolves To</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">content.html</td>
                  <td className="p-3 text-sm text-muted-foreground">Relative</td>
                  <td className="p-3 text-sm text-muted-foreground">File in archive root</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">pages/page-01.jpg</td>
                  <td className="p-3 text-sm text-muted-foreground">Relative</td>
                  <td className="p-3 text-sm text-muted-foreground">File in pages/ directory</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">/images/cover.jpg</td>
                  <td className="p-3 text-sm text-muted-foreground">Root-relative</td>
                  <td className="p-3 text-sm text-muted-foreground">File in images/ directory</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">../assets/style.css</td>
                  <td className="p-3 text-sm text-muted-foreground">Parent-relative</td>
                  <td className="p-3 text-sm text-muted-foreground">File in parent&apos;s assets/ directory</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">https://example.com</td>
                  <td className="p-3 text-sm text-muted-foreground">External</td>
                  <td className="p-3 text-sm text-muted-foreground">Web URL (opens externally)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs">mailto:test@example.com</td>
                  <td className="p-3 text-sm text-muted-foreground">External</td>
                  <td className="p-3 text-sm text-muted-foreground">Email protocol (opens externally)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
