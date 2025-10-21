import { BookImage, CheckCircle, Circle, FileText } from 'lucide-react';

export default function ComicSeriesTypePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          <BookImage className="h-4 w-4" />
          comic_series
        </div>
        <p className="text-muted-foreground">
          A complete comic series containing multiple volumes and chapters. Organized collection with volume-aware chapter tracking via chapters.json.
        </p>
      </div>

      <div className="space-y-8">
        {/* Required Fields */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Required Fields
          </h3>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">type</code>
              <p className="text-sm text-muted-foreground mt-1">
                Must be set to <code className="bg-background px-1.5 py-0.5 rounded">&quot;comic_series&quot;</code>
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">title</code>
              <p className="text-sm text-muted-foreground mt-1">
                The series title
              </p>
            </div>
          </div>
        </div>

        {/* Optional Fields */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Circle className="h-5 w-5 text-muted-foreground" />
            Optional Fields
          </h3>
          <div className="space-y-4">
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">authors</code>
              <p className="text-sm text-muted-foreground mt-1">
                Array of creator names (writers, artists, etc.)
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">description</code>
              <p className="text-sm text-muted-foreground mt-1">
                Series synopsis or overview
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">publisher</code>
              <p className="text-sm text-muted-foreground mt-1">
                Publisher name
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">cover_image</code>
              <p className="text-sm text-muted-foreground mt-1">
                Path to series cover image
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">total_pages</code>
              <p className="text-sm text-muted-foreground mt-1">
                Total number of pages across all volumes (number)
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">reading_direction</code>
              <p className="text-sm text-muted-foreground mt-1">
                &quot;ltr&quot; (left-to-right) or &quot;rtl&quot; (right-to-left, for manga)
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">language</code>
              <p className="text-sm text-muted-foreground mt-1">
                ISO 639-1 language code
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">tags</code>
              <p className="text-sm text-muted-foreground mt-1">
                Array of genre/theme tags
              </p>
            </div>
          </div>
        </div>

        {/* Additional Files */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Additional Files
          </h3>
          <div className="bg-muted/50 border rounded-lg p-6">
            <h4 className="font-semibold mb-3">chapters.json (recommended)</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Define all chapters across all volumes in the series. Each chapter object should contain volume and chapter tracking:
            </p>
            <div className="space-y-2 mb-4">
              <div className="border-l-2 border-primary pl-3">
                <code className="text-sm font-mono bg-background px-1.5 py-0.5 rounded">volume_number</code>
                <span className="text-sm text-muted-foreground ml-2">(required) - Volume number this chapter belongs to</span>
              </div>
              <div className="border-l-2 border-primary pl-3">
                <code className="text-sm font-mono bg-background px-1.5 py-0.5 rounded">chapter_number</code>
                <span className="text-sm text-muted-foreground ml-2">(required) - Chapter number within the series</span>
              </div>
              <div className="border-l-2 border-primary pl-3">
                <code className="text-sm font-mono bg-background px-1.5 py-0.5 rounded">title</code>
                <span className="text-sm text-muted-foreground ml-2">(required) - Chapter title</span>
              </div>
              <div className="border-l-2 border-primary pl-3">
                <code className="text-sm font-mono bg-background px-1.5 py-0.5 rounded">start_page</code>
                <span className="text-sm text-muted-foreground ml-2">(required) - Starting page number in series</span>
              </div>
              <div className="border-l-2 border-primary pl-3">
                <code className="text-sm font-mono bg-background px-1.5 py-0.5 rounded">end_page</code>
                <span className="text-sm text-muted-foreground ml-2">(required) - Ending page number in series</span>
              </div>
              <div className="border-l-2 border-muted pl-3">
                <code className="text-sm font-mono bg-background px-1.5 py-0.5 rounded">description</code>
                <span className="text-sm text-muted-foreground ml-2">(optional) - Chapter description or summary</span>
              </div>
              <div className="border-l-2 border-muted pl-3">
                <code className="text-sm font-mono bg-background px-1.5 py-0.5 rounded">cover_image</code>
                <span className="text-sm text-muted-foreground ml-2">(optional) - Path to chapter cover image</span>
              </div>
            </div>
            <details className="mt-4">
              <summary className="cursor-pointer text-sm font-medium text-primary hover:underline">
                Show chapters.json example
              </summary>
              <div className="mt-3 bg-background rounded border p-3 text-xs font-mono overflow-x-auto">
                <div>[</div>
                <div className="ml-2">{'{'}</div>
                <div className="ml-4">&quot;volume_number&quot;: 1,</div>
                <div className="ml-4">&quot;chapter_number&quot;: 1,</div>
                <div className="ml-4">&quot;title&quot;: &quot;The Beginning&quot;,</div>
                <div className="ml-4">&quot;start_page&quot;: 0,</div>
                <div className="ml-4">&quot;end_page&quot;: 25,</div>
                <div className="ml-4">&quot;description&quot;: &quot;Our hero&apos;s origin story begins...&quot;,</div>
                <div className="ml-4">&quot;cover_image&quot;: &quot;pages/chapter-1-1-cover.jpg&quot;</div>
                <div className="ml-2">{'},'},</div>
                <div className="ml-2">{'{'}</div>
                <div className="ml-4">&quot;volume_number&quot;: 1,</div>
                <div className="ml-4">&quot;chapter_number&quot;: 2,</div>
                <div className="ml-4">&quot;title&quot;: &quot;Rising Challenges&quot;,</div>
                <div className="ml-4">&quot;start_page&quot;: 26,</div>
                <div className="ml-4">&quot;end_page&quot;: 51,</div>
                <div className="ml-4">&quot;description&quot;: &quot;The first true test arrives...&quot;,</div>
                <div className="ml-4">&quot;cover_image&quot;: &quot;pages/chapter-1-2-cover.jpg&quot;</div>
                <div className="ml-2">{'},'},</div>
                <div className="ml-2">{'{'}</div>
                <div className="ml-4">&quot;volume_number&quot;: 2,</div>
                <div className="ml-4">&quot;chapter_number&quot;: 3,</div>
                <div className="ml-4">&quot;title&quot;: &quot;New Horizons&quot;,</div>
                <div className="ml-4">&quot;start_page&quot;: 52,</div>
                <div className="ml-4">&quot;end_page&quot;: 77,</div>
                <div className="ml-4">&quot;description&quot;: &quot;Volume 2 begins...&quot;,</div>
                <div className="ml-4">&quot;cover_image&quot;: &quot;pages/chapter-2-1-cover.jpg&quot;</div>
                <div className="ml-2">{'}'}</div>
                <div>]</div>
              </div>
            </details>
          </div>
        </div>

        {/* Example */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Example tome.json</h3>
          <div className="bg-muted rounded-lg p-4">
            <pre className="text-sm overflow-x-auto">
              <code>{`{
  "type": "comic_series",
  "title": "Super Hero Adventures",
  "authors": ["Jane Artist", "John Writer"],
  "publisher": "Comics Inc",
  "description": "An epic series following heroes across multiple volumes and adventures",
  "cover_image": "pages/page-001.jpg",
  "total_pages": 500,
  "reading_direction": "ltr",
  "language": "en",
  "tags": ["superhero", "action", "adventure", "ongoing"]
}`}</code>
            </pre>
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="text-lg font-semibold mb-4">When to Use comic_series</h3>
          <div className="bg-muted/50 border rounded-lg p-4 space-y-3">
            <p className="text-sm text-muted-foreground">
              Use <code className="bg-background px-1.5 py-0.5 rounded">comic_series</code> when you have:
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 ml-4 list-disc">
              <li>Multiple volumes bundled together in a single tome</li>
              <li>Chapters that span across volumes (e.g., Volume 1 Chapters 1-10, Volume 2 Chapters 11-20)</li>
              <li>Series-wide metadata that applies to the whole collection</li>
              <li>Need to navigate by volume and chapter</li>
            </ul>
          </div>
        </div>

        {/* File Structure */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Example Directory Structure</h3>
          <div className="bg-muted rounded-lg p-4 text-sm font-mono space-y-1">
            <div>my-series.tome/</div>
            <div className="ml-4">├── tome.json</div>
            <div className="ml-4">├── chapters.json</div>
            <div className="ml-4">└── pages/</div>
            <div className="ml-8">├── page-001.jpg</div>
            <div className="ml-8">├── page-002.jpg</div>
            <div className="ml-8">├── chapter-1-1-cover.jpg</div>
            <div className="ml-8">├── chapter-1-2-cover.jpg</div>
            <div className="ml-8">├── chapter-2-1-cover.jpg</div>
            <div className="ml-8">└── ... (all pages)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
