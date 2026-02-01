## 2025-05-14 - Fixed Header Focus Management
**Learning:** A fixed-position header with a high z-index (e.g., `z-50`) can intercept tab focus from elements that appear earlier in the DOM, or cover them when they receive focus. To fix this, a focusable element like a 'skip to content' link must have a higher z-index on focus (e.g., using `focus:z-[9999]`) to ensure it remains visible and accessible.
**Action:** Always ensure skip links have a z-index higher than any fixed header and use `scroll-margin-top` on the target to prevent content from being hidden under the header after skipping.
