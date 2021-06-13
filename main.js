var images =[

]
var names =[ "Family_Book", "Saumen_Chakraborti", "Susmita-Chakraborti", "Ayushi_Chakraborti"]

var i = 0;
function update()
{
    i++;
    var numbers_of_family_members_in_array = 3
    if (i > numbers_of_family_members_in_array)
    {
i = 0;


    }
    var updateImage = images[i];
    var updateName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
 }

