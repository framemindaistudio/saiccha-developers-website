import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Site-wide maintenance switch. Set to false (and redeploy) to bring the site back online.
const MAINTENANCE_MODE = false;

const MAINTENANCE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Saiccha Developers — Temporarily Unavailable</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@500;600&family=Inter+Tight:wght@400;500&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { height: 100%; }
  body {
    font-family: 'Inter Tight', -apple-system, sans-serif;
    background: #f5f5f1;
    color: #10192b;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 24px;
    text-align: center;
  }
  .card { max-width: 480px; }
  .eyebrow {
    font-size: 13px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #a87c22;
    font-weight: 600;
    margin-bottom: 16px;
  }
  h1 {
    font-family: 'Bodoni Moda', Georgia, serif;
    font-size: 32px;
    font-weight: 600;
    color: #0b1f3f;
    line-height: 1.2;
    margin-bottom: 16px;
  }
  p {
    font-size: 16px;
    line-height: 1.6;
    color: #5b6472;
  }
  .rule {
    width: 48px;
    height: 2px;
    background: #c9982e;
    margin: 24px auto;
  }
</style>
</head>
<body oncontextmenu="return false">
  <div class="card">
    <div class="eyebrow">Saiccha Developers</div>
    <h1>We&rsquo;ll be back soon</h1>
    <div class="rule"></div>
    <p>This site is temporarily offline for scheduled maintenance. Please check back in a few days.</p>
  </div>
  <script>
    document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  </script>
</body>
</html>
`;

export function middleware(_request: NextRequest) {
  if (!MAINTENANCE_MODE) return NextResponse.next();

  return new NextResponse(MAINTENANCE_HTML, {
    status: 503,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "Retry-After": "259200",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
