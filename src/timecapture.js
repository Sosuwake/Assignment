export default class TimeCapture
{
  constructor()
  {
    this.reset();
  }

  reset()
  {
    this.startTime = new Date().getTime();
    this.lastTime = this.startTime;
    this.nowTime = this.startTime;
  }

  check()
  {
    this.nowTime = new Date().getTime();
    const elapsed = this.nowTime - this.lastTime;
    this.lastTime = this.nowTime;

    return elapsed;
  }
}
