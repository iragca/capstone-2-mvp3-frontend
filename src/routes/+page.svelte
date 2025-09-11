<!-- App.svelte -->
<script>
  // You can import your D3/SVG components later
</script>

<main class="space-y-20 p-8">
  <!-- Hero -->
  <section class="hero bg-base-200 min-h-screen flex items-center justify-center">
    <div class="hero-content flex flex-col md:flex-row gap-12">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
        </p>
        <button class="btn btn-primary">Start Inference</button>
      </div>
      <div class="flex-1 flex items-center justify-center bg-gray-100 rounded-lg">
        <!-- Placeholder for Hero graph -->
        <span class="text-gray-400">[ Graph Illustration ]</span>
      </div>
    </div>
  </section>

  <!-- Study Details -->
  <section class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
    <div class="space-y-4">
      <h2 class="text-3xl font-bold">Study Details</h2>
      <p class="text-gray-600">Some description about the study goes here.</p>
      <!-- Placeholder chart -->
      <div class="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
        [ Chart ]
      </div>
      <!-- Another block -->
      <div class="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
        [ Diagram ]
      </div>
    </div>
    <div class="space-y-4">
      <!-- More placeholder blocks -->
      <div class="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
        [ Sidebar Content ]
      </div>
      <div class="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
        [ Extra Details ]
      </div>
    </div>
  </section>

  <!-- Inference -->
  <section class="max-w-4xl mx-auto space-y-8">
    <h2 class="text-3xl font-bold">Inference</h2>
    <div class="flex items-center gap-4">
      <input type="text" placeholder="Enter user..."
             class="input input-bordered w-full max-w-xs" />
      <button class="btn btn-primary">Run</button>
    </div>
    <!-- Placeholder for inference graph -->
    <div class="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
      [ Inference Graph ]
    </div>
  </section>
</main>
