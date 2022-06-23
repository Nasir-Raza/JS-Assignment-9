/* Coded by 
	 Name	: Nasir Raza
	 Roll #	: KH01210813250
*/

document.addEventListener('DOMContentLoaded', () =>
  requestAnimationFrame(updateTime)
);

function updateTime() {
  document.documentElement.style.setProperty('--timer-month', "'" + moment().format("MMM") + "'");
  document.documentElement.style.setProperty('--timer-date', "'" + moment().format("DD") + "'");
  document.documentElement.style.setProperty('--timer-day', "'" + moment().format("dddd") + "'");

  document.documentElement.style.setProperty('--timer-hours', "'" + moment().format("kk") + "'");
  document.documentElement.style.setProperty('--timer-minutes', "'" + moment().format("mm") + "'");
  document.documentElement.style.setProperty('--timer-seconds', "'" + moment().format("ss") + "'");
  requestAnimationFrame(updateTime);
}