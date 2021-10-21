
$(function() {

    const lampTomb = [];

    const szuloElem = $("article");
    const sablonElem = $(".lamp");

    const meret = 9;
    
    for (let index = 0; index < meret; index++) {
      
        const ujElem = sablonElem.clone().appendTo(szuloElem);
        const lamp = new Lamp(ujElem, index);

        lampTomb.push(lamp);
    }
    sablonElem.remove();
    console.log(lampTomb);

    $(window).on("felkapcsolas", (esemeny) => {

        console.log(esemeny.detail);

        let elemID = esemeny.detail;

        //lampTomb[elemID + 1].setAllapot();

        if (elemID == 8) {
            
            lampTomb[elemID - 3].setAllapot();

        } else {
            
            lampTomb[elemID + 1].setAllapot();
        }

    });

});