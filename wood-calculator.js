function woodCalculator (chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalChairWood = perChairWood*chairQuantity;
    const totalTableWood = perTableWood*tableQuantity;
    const totalBedWood = perBedWood*bedQuantity;

    console.log("total quantity of wood for chair is:", totalChairWood);
    console.log("total quantity of wood for table is:", totalTableWood);
    console.log("total quantity of wood for bed is:", totalBedWood);

    const totalWood = totalChairWood + totalTableWood + totalBedWood;
    console.log(totalWood);
    const totalString = "total quantity of wood is";
    const finalWood = totalString + ":" + (totalWood);
    return  finalWood;
}
const neddedQuantity = woodCalculator(5, 6, 3);
console.log(neddedQuantity);