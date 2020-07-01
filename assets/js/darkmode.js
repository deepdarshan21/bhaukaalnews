const options={
	 bottom: '32px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'upset', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}
function changemode(){
const darkmode =  new Darkmode();
darkmode.toggle();
}/*
if (darkmode.isActivated()="true"){
element.style.color="limegreen";
alert("darkmode")}
else{
	element.style.color="#fff";}
}*/
