<script>
  import { iconClock, iconEthereum, iconView, imageAvatar, imageEquilibrum } from './assets';
</script>

<main>
  <div class="max-w-xs p-6 | flex flex-col gap-6 | bg-blue-800 rounded-2xl shadow-lg">
    <div class="relative group | rounded-xl overflow-hidden">
      <img src={imageEquilibrum} alt="cool looking cube with neon ligth coming from its inside" />
      <div class="absolute inset-0 | hidden group-hover:inline | bg-cyan-500/80">
        <a class="h-full w-full | grid place-content-center" href="#">
          <img src={iconView} alt="view icon" />
        </a>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <div class="contents">
        <h1 class="text-2xl font-semibold">
          <a class="text-white hover:text-cyan-500" href="#"> Equilibrium #3429 </a>
        </h1>
        <p class="text-lg">Our equilibrium collection promotes balance and calm.</p>
        <div class="my-1.5 | flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img src={iconEthereum} alt="ethereum icon" />
            <span class="font-semibold text-cyan-500">
              0.041 <abbr title="Ethereum">ETH</abbr>
            </span>
          </div>
          <div class="flex items-center gap-2">
            <img src={iconClock} alt="clock icon" />
            <span> 3 days left </span>
          </div>
        </div>
        <!-- Separator -->
        <div class="h-0.5 my-2 bg-blue-700" />
        <footer class="flex items-center gap-5">
          <img
            class="h-8 w-8 min-w-8 rounded-full ring-2 ring-white"
            src={imageAvatar}
            alt="jules-wyvern-avatar" />
          <span class="font-normal">
            Creation of
            <a class="text-white hover:text-cyan-500" href="#"> Jules Wyvern </a></span>
        </footer>
      </div>
    </div>
  </div>
</main>
