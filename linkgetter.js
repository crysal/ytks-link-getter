function hconvertDurationtoSeconds(duration){
    const [hours, minutes, seconds] = duration.split(':');
    return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
}; 
function mconvertDurationtoSeconds(duration){
    const [minutes, seconds] = duration.split(':');
    return Number(minutes) * 60 + Number(seconds);
};

function linkgetter(){
var output
var timestamp
var timestamptinsec
var amount = document.getElementsByClassName("mantine-Stack-root mantine-zyu68o").length
for (i = 0; i != amount; i++)
{
timestamp = (document.getElementsByClassName("mantine-Stack-root mantine-zyu68o")[i].children[2].firstChild).data

if (isNaN(hconvertDurationtoSeconds(timestamp)))
{timestamptinsec = mconvertDurationtoSeconds(timestamp)} else
{timestamptinsec = hconvertDurationtoSeconds(timestamp)}
output = ("https://www.youtube.com/watch?time_continue="+timestamptinsec+"&v="+(document.getElementsByClassName("mantine-Stack-root mantine-zyu68o")[i].children[0].children[0].children[0].children[0].alt).replace("Thumbnail for video with id ",""))
console.log(output)
}
}
linkgetter()
