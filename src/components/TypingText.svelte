<script>
  let { texts = [], speed = 80, deleteSpeed = 40, pauseDuration = 2000 } = $props();

  let content = $state('');
  let showCursor = $state(true);

  $effect(() => {
    if (!texts.length) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function type() {
      const current = texts[textIndex];

      if (isDeleting) {
        content = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        content = current.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? deleteSpeed : speed;

      if (!isDeleting && charIndex === current.length) {
        delay = pauseDuration;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        delay = 500;
      }

      timeoutId = setTimeout(type, delay);
    }

    type();

    return () => clearTimeout(timeoutId);
  });

  $effect(() => {
    const interval = setInterval(() => {
      showCursor = !showCursor;
    }, 530);
    return () => clearInterval(interval);
  });
</script>

<span class="typing-wrapper">
  <span class="typing-content">{content}</span><span class="typing-cursor" class:hidden={!showCursor}>|</span>
</span>

<style>
  .typing-wrapper {
    display: inline;
  }

  .typing-cursor {
    font-weight: 100;
    color: #6b7280;
    transition: opacity 0.1s;
  }

  .hidden {
    opacity: 0;
  }
</style>
