var task1 = {
    customKor:{
        parents:true,
        friends:false,
        critisizer:true
    },
    korishNa:20,
    postKor:"recent"
};

for(props in task1){
    //console.log(props+ " = " + task1[props]);
    console.log(props, task1[props]);
}