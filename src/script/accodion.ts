document.querySelectorAll<HTMLElement>('.accordion-headers').forEach((header) => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling as HTMLElement | null;

    if (!content) return; // safety check

    if (content.classList.contains('active')) {
      content.style.maxHeight = '';
      content.classList.remove('active');
    } else {
      document.querySelectorAll<HTMLElement>('.accordion-contents').forEach((c) => {
        c.style.maxHeight = '';
        c.classList.remove('active');
      });

      content.classList.add('active');
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  });
});