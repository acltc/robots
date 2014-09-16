{
  "targets": [
    {
      "target_name": "libnode_sdl",
      "sources": [
        "src/helpers.cc",
        "src/node_sdl.cc",
        "src/struct_wrappers.cc",
        "src/render.cc",
        "src/texture.cc",
        "src/window.cc",
        "src/surface.cc",
        "src/container.cc",
        "src/sdl_gl.cc",
        "src/event.cc",
        "src/key.cc",
        "src/mouse.cc",
        "src/font.cc",
        "src/joystick.cc",
        "src/controller.cc"
      ],
      "libraries": [
        "-lSDL2",
        "-lSDL2_ttf",
        "-lSDL2_image"
      ],
      "defines": [
        "_THREAD_SAFE",
        "ENABLE_ARG_CHECKING",
        "ENABLE_IMAGE",
        "ENABLE_TTF"
      ]
    }
  ]
}
