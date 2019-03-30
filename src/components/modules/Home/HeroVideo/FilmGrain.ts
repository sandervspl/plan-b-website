class FilmGrainFx {
  // Settings
  readonly patternScaleX = 1;
  readonly patternScaleY = 1;
  readonly patternSize = 64;
  readonly patternRefreshInterval = 8;
  readonly patternAlpha = 25; // Integer between 0 and 255

  readonly patternPixelDataLength = this.patternSize * this.patternSize * 4;
  ctx!: CanvasRenderingContext2D;
  patternCanvas!: HTMLCanvasElement;
  patternCtx!: CanvasRenderingContext2D;
  patternData!: ImageData;
  viewWidth = 0;
  viewHeight = 0;
  frame = 0;

  constructor(private canvas: HTMLCanvasElement) {
    this.initCanvas();
    this.initGrain();
    requestAnimationFrame(this.loop);
  }

  // create a canvas which will render the grain
  initCanvas = () => {
    this.viewWidth = this.canvas.width = this.canvas.clientWidth;
    this.viewHeight = this.canvas.height = this.canvas.clientHeight;
    const ctx = this.canvas.getContext('2d');

    if (ctx) {
      this.ctx = ctx;
      this.ctx.scale(this.patternScaleX, this.patternScaleY);
    }
  };

  // create a canvas which will be used as a pattern
  initGrain = () => {
    this.patternCanvas = document.createElement('canvas');
    this.patternCanvas.width = this.patternSize;
    this.patternCanvas.height = this.patternSize;
    const ctx = this.patternCanvas.getContext('2d');

    if (ctx) {
      this.patternCtx = ctx;
      this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
    }
  };

  update = () => {
    let value: number;

    for (let i = 0; i < this.patternPixelDataLength; i += 4) {
      value = (Math.random() * 255) | 0;

      this.patternData.data[i] = value;
      this.patternData.data[i + 1] = value;
      this.patternData.data[i + 2] = value;
      this.patternData.data[i + 3] = this.patternAlpha;
    }

    this.patternCtx.putImageData(this.patternData, 0, 0);
  };

  draw = () => {
    this.ctx.clearRect(0, 0, this.viewWidth, this.viewHeight);

    const pattern = this.ctx.createPattern(this.patternCanvas, 'repeat');

    if (pattern) {
      this.ctx.fillStyle = pattern;
    }

    this.ctx.fillRect(0, 0, this.viewWidth, this.viewHeight);
  };

  loop = () => {
    if (++this.frame % this.patternRefreshInterval === 0) {
      this.update();
      this.draw();
    }

    requestAnimationFrame(this.loop);
  };
}

export default FilmGrainFx;
