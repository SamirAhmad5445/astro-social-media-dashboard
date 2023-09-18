<script>
  import { onMount } from "svelte";

  onMount((e) => {
    const localTheme = localStorage.getItem("page-color-scheme");
    if (!localTheme) {
      // if no localTheme check the system preference
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? setTheme("dark")
        : setTheme("light");
    } // else set the theme to the localTheme
    setTheme(localTheme);
  });

  const setTheme = (theme) => {
    // set the item in the localStorage for the next time
    localStorage.setItem("page-color-scheme", theme);
    // set data-theme attribute on the html element
    document.documentElement.setAttribute("data-theme", theme);
    // check the toggle if dark theme enabled
    document.getElementById("toggle").checked = theme === "dark";
  };

  const changeTheme = (e) => {
    localStorage.getItem("page-color-scheme") === "dark"
      ? setTheme("light")
      : setTheme("dark");
  };
</script>

<div
  class="grid-col-1 w-14 md:w-12 p-1 rounded-full grid bg-gradient-to-r from-toggle-1 to-toggle-2 transition-all duration-200"
>
  <input
    class="peer w-full col-start-1 col-end-1 row-start-1 row-end-1 z-10 opacity-0 transition-all duration-200 cursor-pointer"
    type="checkbox"
    name="toggle"
    id="toggle"
    on:change={changeTheme}
  />
  <span
    class="col-start-1 col-end-1 peer-checked:ml-0 ml-auto row-start-1 row-end-1 w-5 h-5 md:w-4 md:h-4 block bg-body-2 rounded-full shadow-md transition-all duration-200"
  />
</div>
