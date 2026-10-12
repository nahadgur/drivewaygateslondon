import { pathToFileURL } from 'node:url';

// Call immediately before an action which would make an article live.
// A passed check does not authorise publication or replace other release gates.
export function publicationDay(now = new Date()) {
  const timezone = 'Asia/Shanghai';
  const weekday = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone, weekday: 'long',
  }).format(now);
  return { timezone, weekday, allowed: !['Saturday', 'Sunday'].includes(weekday) };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = publicationDay();
  console.log(JSON.stringify(result));
  if (!result.allowed) {
    console.error('Weekend article publication blocked. Keep the draft and defer to the next eligible weekday slot, preserving cadence and minimum spacing.');
    process.exitCode = 2;
  }
}
