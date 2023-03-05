"use strict";

function specificSum(num) {
    if (num > 9999) {
        console.error(
            "The number can't be greater then 99 and less then 1000: " + num
        );
        return -1;
    } else if (num >= 1000 && num <= 9999) {
        let n1 = Math.floor(num / 1000);
        let n2 = Math.floor((num % 1000) / 100);
        let n3 = Math.floor((num % 100) / 10);
        let n4 = num % 10;
        return specificSum(n1 + n2 + n3 + n4);
    } else if (num > 99 && num < 1000) {
        let n1 = Math.floor(num / 100);
        let n2 = Math.floor((num % 100) / 10);
        let n3 = num % 10;
        return specificSum(n1 + n2 + n3);
    } else if (num >= 23 && num <= 99)
        return Math.floor(num / 10) + Math.floor(num % 10);
    else return num;
}

function CalcData(day, month, year, a = 0, b = 0, c = 0, d = 0, e = 0) {
    this.a = specificSum(day); //Ð°
    this.b = specificSum(month); //Ð±
    this.c = specificSum(year); //Ð²
    this.d = specificSum(this.a + this.b + this.c); //Ð³
    this.e = specificSum(this.a + this.b + this.c + this.d); //Ð´
    console.log(a + " " + b + " " + c + " " + d + " " + e);

    this.a = specificSum(this.a + a);
    this.b = specificSum(this.b + b);
    this.c = specificSum(this.c + c);
    this.d = specificSum(this.d + d);
    this.e = specificSum(this.e + e);

    console.log(a + " " + b + " " + c + " " + d + " " + e);

    this.f = specificSum(this.a + this.b); //Ðµ
    this.g = specificSum(this.b + this.c); //Ð¶
    this.h = specificSum(this.c + this.d); //Ð¸
    this.k = specificSum(this.a + this.d); //Ð·
    this.l = specificSum(this.d + this.e); //Ðº
    this.m = specificSum(this.e + this.c); //Ð»
    this.n = specificSum(this.l + this.m); //Ð¼
    this.o = specificSum(this.l + this.n); //Ð½
    this.p = specificSum(this.m + this.n); //Ð¾

    this.skyValue = specificSum(this.b + this.d);
    this.earthValue = specificSum(this.a + this.c);
    this.skyAndEarth = specificSum(this.skyValue + this.earthValue);

    this.maleValue = specificSum(this.f + this.h);
    this.femaleValue = specificSum(this.g + this.k);
    this.maleFemaleValue = specificSum(this.maleValue + this.femaleValue);

    this.r = specificSum(this.a + this.e);
    this.s = specificSum(this.a + this.r);
    this.t = specificSum(this.r + this.e);

    this.r1 = specificSum(this.b + this.e);
    this.s1 = specificSum(this.b + this.r1);
    this.t1 = specificSum(this.r1 + this.e);

    this.smtr = specificSum(this.c + this.m);
    this.smtb = specificSum(this.d + this.l);

    this.totalp = specificSum(
        this.a + this.s + this.r + this.t + this.e + this.m + this.c
    );
    this.totalen = specificSum(
        this.b + this.s1 + this.r1 + this.t1 + this.e + this.l + this.d
    );

    this.tab = specificSum(this.a + this.b);
    this.ts1s = specificSum(this.s1 + this.s);
    this.tr1r = specificSum(this.r1 + this.r);
    this.tt1t = specificSum(this.t1 + this.t);
    this.tee = specificSum(this.e + this.e);
    this.tlm = specificSum(this.l + this.m);
    this.tdc = specificSum(this.d + this.c);
    this.totalem = specificSum(
        this.tab +
            this.ts1s +
            this.tr1r +
            this.tt1t +
            this.tee +
            this.tlm +
            this.tdc
    );
}

function setDataToTable(calc) {
    let arr_elements = new Array();
    //arr[0].innerHTML = calc.a; //0

    //
    arr_elements[0] = calc.a;
    arr_elements[8] = specificSum(calc.a + calc.b); //10
    arr_elements[4] = specificSum(calc.a + calc.f); //5
    $(".y5").html(arr_elements[4]);
    arr_elements[2] = specificSum(calc.a + parseInt(arr_elements[4])); //2-3
    $(".y2_3").html(arr_elements[2]);
    arr_elements[1] = specificSum(calc.a + parseInt(arr_elements[2])); //1-2
    $(".y1_2").html(arr_elements[1]);
    arr_elements[3] = specificSum(
        parseInt(arr_elements[4]) + parseInt(arr_elements[2])
    ); //3-4
    $(".y3_4").html(arr_elements[3]);
    arr_elements[6] = specificSum(
        parseInt(arr_elements[8]) + parseInt(arr_elements[4])
    ); //7-8
    $(".y7_8").html(arr_elements[6]);
    arr_elements[7] = specificSum(
        parseInt(arr_elements[6]) + parseInt(arr_elements[8])
    ); //8-9
    $(".y8_9").html(arr_elements[7]);
    arr_elements[5] = specificSum(
        parseInt(arr_elements[6]) + parseInt(arr_elements[4])
    ); //6-7
    $(".y6_7").html(arr_elements[5]);

    arr_elements[12] = specificSum(calc.f + calc.b); //15
    $(".y15").html(arr_elements[12]);
    arr_elements[10] = specificSum(calc.f + parseInt(arr_elements[12])); //12-13
    $(".y12_13").html(arr_elements[10]);
    arr_elements[9] = specificSum(calc.f + parseInt(arr_elements[10])); //11-12
    $(".y11_12").html(arr_elements[9]);
    arr_elements[11] = specificSum(
        parseInt(arr_elements[10]) + parseInt(arr_elements[12])
    ); //13-14
    $(".y13_14").html(arr_elements[11]);
    arr_elements[14] = specificSum(calc.b + parseInt(arr_elements[12])); //17-18
    $(".y17_18").html(arr_elements[14]);
    arr_elements[15] = specificSum(calc.b + parseInt(arr_elements[14])); //18-19
    $(".y18_19").html(arr_elements[15]);
    arr_elements[13] = specificSum(
        parseInt(arr_elements[12]) + parseInt(arr_elements[14])
    ); //16-17
    $(".y16_17").html(arr_elements[13]);

    arr_elements[16] = calc.b; //20
    arr_elements[20] = specificSum(calc.b + calc.g); //25
    $(".y25").html(arr_elements[20]);
    arr_elements[18] = specificSum(calc.b + parseInt(arr_elements[20])); //22-23
    $(".y22_23").html(arr_elements[18]);
    arr_elements[17] = specificSum(calc.b + parseInt(arr_elements[18])); //21-22
    $(".y21_22").html(arr_elements[17]);
    arr_elements[19] = specificSum(
        parseInt(arr_elements[18]) + parseInt(arr_elements[20])
    ); //23-24
    $(".y23_24").html(arr_elements[19]);
    arr_elements[22] = specificSum(parseInt(arr_elements[20]) + calc.g); //27-28
    $(".y27_28").html(arr_elements[22]);
    arr_elements[23] = specificSum(parseInt(arr_elements[22]) + calc.g); //28-29
    $(".y28_29").html(arr_elements[23]);
    arr_elements[21] = specificSum(
        parseInt(arr_elements[20]) + parseInt(arr_elements[22])
    ); //26-27
    $(".y26_27").html(arr_elements[21]);
    arr_elements[24] = specificSum(calc.b + calc.c); //30
    arr_elements[28] = specificSum(calc.c + calc.g); //35
    $(".y35").html(arr_elements[28]);
    arr_elements[26] = specificSum(parseInt(arr_elements[28]) + calc.g); //32-33
    $(".y32_33").html(arr_elements[26]);
    arr_elements[25] = specificSum(calc.g + parseInt(arr_elements[26])); //31-32
    $(".y31_32").html(arr_elements[25]);
    arr_elements[27] = specificSum(
        parseInt(arr_elements[26]) + parseInt(arr_elements[28])
    ); //33-34
    $(".y33_34").html(arr_elements[27]);
    arr_elements[30] = specificSum(parseInt(arr_elements[28]) + calc.c); //37-38
    $(".y37_38").html(arr_elements[30]);
    arr_elements[31] = specificSum(parseInt(arr_elements[30]) + calc.c); //38-39
    $(".y38_39").html(arr_elements[31]);
    arr_elements[29] = specificSum(
        parseInt(arr_elements[28]) + parseInt(arr_elements[30])
    ); //36-37
    $(".y36_37").html(arr_elements[29]);
    arr_elements[32] = calc.c; //40
    arr_elements[36] = specificSum(calc.c + calc.h); //45
    $(".y45").html(arr_elements[36]);
    arr_elements[34] = specificSum(calc.c + parseInt(arr_elements[36])); //42-43
    $(".y42_43").html(arr_elements[34]);
    arr_elements[33] = specificSum(calc.c + parseInt(arr_elements[34])); //41-42
    $(".y41_42").html(arr_elements[33]);
    arr_elements[35] = specificSum(
        parseInt(arr_elements[34]) + parseInt(arr_elements[36])
    ); //43-44
    $(".y43_44").html(arr_elements[35]);
    arr_elements[38] = specificSum(parseInt(arr_elements[36]) + calc.h); //47-48
    $(".y47_48").html(arr_elements[38]);
    arr_elements[39] = specificSum(parseInt(arr_elements[38]) + calc.h); //48-49
    $(".y48_49").html(arr_elements[39]);
    arr_elements[37] = specificSum(
        parseInt(arr_elements[36]) + parseInt(arr_elements[38])
    ); //46-47
    $(".y46_47").html(arr_elements[37]);
    arr_elements[40] = specificSum(calc.c + calc.d); //50
    arr_elements[44] = specificSum(calc.h + calc.d); //55
    $(".y55").html(arr_elements[44]);
    arr_elements[42] = specificSum(calc.h + parseInt(arr_elements[44])); //52-53
    $(".y52_53").html(arr_elements[42]);
    arr_elements[41] = specificSum(calc.h + parseInt(arr_elements[42])); //51-52
    $(".y51_52").html(arr_elements[41]);
    arr_elements[43] = specificSum(
        parseInt(arr_elements[44]) + parseInt(arr_elements[42])
    ); //53-54
    $(".y53_54").html(arr_elements[43]);
    arr_elements[46] = specificSum(parseInt(arr_elements[44]) + calc.d); //57-58
    $(".y57_58").html(arr_elements[46]);
    arr_elements[47] = specificSum(parseInt(arr_elements[46]) + calc.d); //58-59
    $(".y58_59").html(arr_elements[47]);
    arr_elements[45] = specificSum(
        parseInt(arr_elements[44]) + parseInt(arr_elements[46])
    ); //56-57
    $(".y56_57").html(arr_elements[45]);
    arr_elements[48] = specificSum(calc.a + calc.b + calc.c); //60
    arr_elements[52] = specificSum(calc.d + calc.k); //65
    $(".y65").html(arr_elements[52]);
    arr_elements[50] = specificSum(calc.d + parseInt(arr_elements[52])); //62-63
    $(".y62_63").html(arr_elements[50]);
    arr_elements[49] = specificSum(calc.d + parseInt(arr_elements[50])); //61-62
    $(".y61_62").html(arr_elements[49]);
    arr_elements[51] = specificSum(
        parseInt(arr_elements[52]) + parseInt(arr_elements[50])
    ); //63-64
    $(".y63_64").html(arr_elements[51]);
    arr_elements[54] = specificSum(parseInt(arr_elements[52]) + calc.k); //67-68
    $(".y67_68").html(arr_elements[54]);
    arr_elements[55] = specificSum(parseInt(arr_elements[54]) + calc.k); //68-69
    $(".y68_69").html(arr_elements[55]);
    arr_elements[53] = specificSum(
        parseInt(arr_elements[52]) + parseInt(arr_elements[54])
    ); //66-67
    $(".y66_67").html(arr_elements[53]);
    arr_elements[56] = specificSum(calc.d + calc.a); //70
    arr_elements[60] = specificSum(calc.k + calc.a); //75
    $(".y75").html(arr_elements[60]);
    arr_elements[58] = specificSum(calc.k + parseInt(arr_elements[60])); //72-73
    $(".y72_73").html(arr_elements[58]);
    arr_elements[57] = specificSum(calc.k + parseInt(arr_elements[58])); //71-72
    $(".y71_72").html(arr_elements[57]);
    arr_elements[59] = specificSum(
        parseInt(arr_elements[60]) + parseInt(arr_elements[58])
    ); //73-74
    $(".y73_74").html(arr_elements[59]);
    arr_elements[62] = specificSum(parseInt(arr_elements[60]) + calc.a); //77-78
    $(".y77_78").html(arr_elements[62]);
    arr_elements[63] = specificSum(parseInt(arr_elements[62]) + calc.a); //78-79
    $(".y78_79").html(arr_elements[63]);
    arr_elements[61] = specificSum(
        parseInt(arr_elements[62]) + parseInt(arr_elements[60])
    ); //76-77
    $(".y76_77").html(arr_elements[61]);
    arr_elements[64] = calc.a; //80
}

function addDataToTable(calc, second_calc) {
    let arr = document.querySelectorAll(".column .value");
    let prepare = new Array(65);

    prepare[0] = calc.a; //0
    prepare[8] = specificSum(calc.a + calc.b); //10
    prepare[4] = specificSum(calc.a + calc.f); //5
    prepare[2] = specificSum(calc.a + parseInt(arr[4].innerHTML)); //2-3
    prepare[1] = specificSum(calc.a + parseInt(arr[2].innerHTML)); //1-2
    prepare[3] = specificSum(
        parseInt(arr[4].innerHTML) + parseInt(arr[2].innerHTML)
    ); //3-4
    prepare[6] = specificSum(
        parseInt(arr[8].innerHTML) + parseInt(arr[4].innerHTML)
    ); //7-8
    prepare[7] = specificSum(
        parseInt(arr[6].innerHTML) + parseInt(arr[8].innerHTML)
    ); //8-9
    prepare[5] = specificSum(
        parseInt(arr[6].innerHTML) + parseInt(arr[4].innerHTML)
    ); //6-7
    prepare[12] = specificSum(calc.f + calc.b); //15
    prepare[10] = specificSum(calc.f + parseInt(arr[12].innerHTML)); //12-13
    prepare[9] = specificSum(calc.f + parseInt(arr[10].innerHTML)); //11-12
    prepare[11] = specificSum(
        parseInt(arr[10].innerHTML) + parseInt(arr[12].innerHTML)
    ); //13-14
    prepare[14] = specificSum(calc.b + parseInt(arr[12].innerHTML)); //17-18
    prepare[15] = specificSum(calc.b + parseInt(arr[14].innerHTML)); //18-19
    prepare[13] = specificSum(
        parseInt(arr[12].innerHTML) + parseInt(arr[14].innerHTML)
    ); //16-17
    prepare[16] = calc.b; //20
    prepare[20] = specificSum(calc.b + calc.g); //25
    prepare[18] = specificSum(calc.b + parseInt(arr[20].innerHTML)); //22-23
    prepare[17] = specificSum(calc.b + parseInt(arr[18].innerHTML)); //21-22
    prepare[19] = specificSum(
        parseInt(arr[18].innerHTML) + parseInt(arr[20].innerHTML)
    ); //23-24
    prepare[22] = specificSum(parseInt(arr[20].innerHTML) + calc.g); //27-28
    prepare[23] = specificSum(parseInt(arr[22].innerHTML) + calc.g); //28-29
    prepare[21] = specificSum(
        parseInt(arr[20].innerHTML) + parseInt(arr[22].innerHTML)
    ); //26-27
    prepare[24] = specificSum(calc.b + calc.c); //30
    prepare[28] = specificSum(calc.c + calc.g); //35
    prepare[26] = specificSum(parseInt(arr[28].innerHTML) + calc.g); //32-33
    prepare[25] = specificSum(calc.g + parseInt(arr[26].innerHTML)); //31-32
    prepare[27] = specificSum(
        parseInt(arr[26].innerHTML) + parseInt(arr[28].innerHTML)
    ); //33-34
    prepare[30] = specificSum(parseInt(arr[28].innerHTML) + calc.c); //37-38
    prepare[31] = specificSum(parseInt(arr[30].innerHTML) + calc.c); //38-39
    prepare[29] = specificSum(
        parseInt(arr[28].innerHTML) + parseInt(arr[30].innerHTML)
    ); //36-37
    prepare[32] = calc.c; //40
    prepare[36] = specificSum(calc.c + calc.h); //45
    prepare[34] = specificSum(calc.c + parseInt(arr[36].innerHTML)); //42-43
    prepare[33] = specificSum(calc.c + parseInt(arr[34].innerHTML)); //41-42
    prepare[35] = specificSum(
        parseInt(arr[34].innerHTML) + parseInt(arr[36].innerHTML)
    ); //43-44
    prepare[38] = specificSum(parseInt(arr[36].innerHTML) + calc.h); //47-48
    prepare[39] = specificSum(parseInt(arr[38].innerHTML) + calc.h); //48-49
    prepare[37] = specificSum(
        parseInt(arr[36].innerHTML) + parseInt(arr[38].innerHTML)
    ); //46-47
    prepare[40] = specificSum(calc.c + calc.d); //50
    prepare[44] = specificSum(calc.h + calc.d); //55
    prepare[42] = specificSum(calc.h + parseInt(arr[44].innerHTML)); //52-53
    prepare[41] = specificSum(calc.h + parseInt(arr[42].innerHTML)); //51-52
    prepare[43] = specificSum(
        parseInt(arr[44].innerHTML) + parseInt(arr[42].innerHTML)
    ); //53-54
    prepare[46] = specificSum(parseInt(arr[44].innerHTML) + calc.d); //57-58
    prepare[47] = specificSum(parseInt(arr[46].innerHTML) + calc.d); //58-59
    prepare[45] = specificSum(
        parseInt(arr[44].innerHTML) + parseInt(arr[46].innerHTML)
    ); //56-57
    prepare[48] = specificSum(calc.a + calc.b + calc.c); //60
    prepare[52] = specificSum(calc.d + calc.k); //65
    prepare[50] = specificSum(calc.d + parseInt(arr[52].innerHTML)); //62-63
    prepare[49] = specificSum(calc.d + parseInt(arr[50].innerHTML)); //61-62
    prepare[51] = specificSum(
        parseInt(arr[52].innerHTML) + parseInt(arr[50].innerHTML)
    ); //63-64
    prepare[54] = specificSum(parseInt(arr[52].innerHTML) + calc.k); //67-68
    prepare[55] = specificSum(parseInt(arr[54].innerHTML) + calc.k); //68-69
    prepare[53] = specificSum(
        parseInt(arr[52].innerHTML) + parseInt(arr[54].innerHTML)
    ); //66-67
    prepare[56] = specificSum(calc.d + calc.a); //70
    prepare[60] = specificSum(calc.k + calc.a); //75
    prepare[58] = specificSum(calc.k + parseInt(arr[60].innerHTML)); //72-73
    prepare[57] = specificSum(calc.k + parseInt(arr[58].innerHTML)); //71-72
    prepare[59] = specificSum(
        parseInt(arr[60].innerHTML) + parseInt(arr[58].innerHTML)
    ); //73-74
    prepare[62] = specificSum(parseInt(arr[60].innerHTML) + calc.a); //77-78
    prepare[63] = specificSum(parseInt(arr[62].innerHTML) + calc.a); //78-79
    prepare[61] = specificSum(
        parseInt(arr[62].innerHTML) + parseInt(arr[60].innerHTML)
    ); //76-77
    prepare[64] = calc.a; //80

    arr[0].innerHTML = second_calc.a; //0
    arr[8].innerHTML = specificSum(second_calc.a + second_calc.b); //10
    arr[4].innerHTML = specificSum(second_calc.a + second_calc.f); //5
    arr[2].innerHTML = specificSum(second_calc.a + parseInt(arr[4].innerHTML)); //2-3
    arr[1].innerHTML = specificSum(second_calc.a + parseInt(arr[2].innerHTML)); //1-2
    arr[3].innerHTML = specificSum(
        parseInt(arr[4].innerHTML) + parseInt(arr[2].innerHTML)
    ); //3-4
    arr[6].innerHTML = specificSum(
        parseInt(arr[8].innerHTML) + parseInt(arr[4].innerHTML)
    ); //7-8
    arr[7].innerHTML = specificSum(
        parseInt(arr[6].innerHTML) + parseInt(arr[8].innerHTML)
    ); //8-9
    arr[5].innerHTML = specificSum(
        parseInt(arr[6].innerHTML) + parseInt(arr[4].innerHTML)
    ); //6-7
    arr[12].innerHTML = specificSum(second_calc.f + second_calc.b); //15
    arr[10].innerHTML = specificSum(
        second_calc.f + parseInt(arr[12].innerHTML)
    ); //12-13
    arr[9].innerHTML = specificSum(second_calc.f + parseInt(arr[10].innerHTML)); //11-12
    arr[11].innerHTML = specificSum(
        parseInt(arr[10].innerHTML) + parseInt(arr[12].innerHTML)
    ); //13-14
    arr[14].innerHTML = specificSum(
        second_calc.b + parseInt(arr[12].innerHTML)
    ); //17-18
    arr[15].innerHTML = specificSum(
        second_calc.b + parseInt(arr[14].innerHTML)
    ); //18-19
    arr[13].innerHTML = specificSum(
        parseInt(arr[12].innerHTML) + parseInt(arr[14].innerHTML)
    ); //16-17
    arr[16].innerHTML = second_calc.b; //20
    arr[20].innerHTML = specificSum(second_calc.b + second_calc.g); //25
    arr[18].innerHTML = specificSum(
        second_calc.b + parseInt(arr[20].innerHTML)
    ); //22-23
    arr[17].innerHTML = specificSum(
        second_calc.b + parseInt(arr[18].innerHTML)
    ); //21-22
    arr[19].innerHTML = specificSum(
        parseInt(arr[18].innerHTML) + parseInt(arr[20].innerHTML)
    ); //23-24
    arr[22].innerHTML = specificSum(
        parseInt(arr[20].innerHTML) + second_calc.g
    ); //27-28
    arr[23].innerHTML = specificSum(
        parseInt(arr[22].innerHTML) + second_calc.g
    ); //28-29
    arr[21].innerHTML = specificSum(
        parseInt(arr[20].innerHTML) + parseInt(arr[22].innerHTML)
    ); //26-27
    arr[24].innerHTML = specificSum(second_calc.b + second_calc.c); //30
    arr[28].innerHTML = specificSum(second_calc.c + second_calc.g); //35
    arr[26].innerHTML = specificSum(
        parseInt(arr[28].innerHTML) + second_calc.g
    ); //32-33
    arr[25].innerHTML = specificSum(
        second_calc.g + parseInt(arr[26].innerHTML)
    ); //31-32
    arr[27].innerHTML = specificSum(
        parseInt(arr[26].innerHTML) + parseInt(arr[28].innerHTML)
    ); //33-34
    arr[30].innerHTML = specificSum(
        parseInt(arr[28].innerHTML) + second_calc.c
    ); //37-38
    arr[31].innerHTML = specificSum(
        parseInt(arr[30].innerHTML) + second_calc.c
    ); //38-39
    arr[29].innerHTML = specificSum(
        parseInt(arr[28].innerHTML) + parseInt(arr[30].innerHTML)
    ); //36-37
    arr[32].innerHTML = second_calc.c; //40
    arr[36].innerHTML = specificSum(second_calc.c + second_calc.h); //45
    arr[34].innerHTML = specificSum(
        second_calc.c + parseInt(arr[36].innerHTML)
    ); //42-43
    arr[33].innerHTML = specificSum(
        second_calc.c + parseInt(arr[34].innerHTML)
    ); //41-42
    arr[35].innerHTML = specificSum(
        parseInt(arr[34].innerHTML) + parseInt(arr[36].innerHTML)
    ); //43-44
    arr[38].innerHTML = specificSum(
        parseInt(arr[36].innerHTML) + second_calc.h
    ); //47-48
    arr[39].innerHTML = specificSum(
        parseInt(arr[38].innerHTML) + second_calc.h
    ); //48-49
    arr[37].innerHTML = specificSum(
        parseInt(arr[36].innerHTML) + parseInt(arr[38].innerHTML)
    ); //46-47
    arr[40].innerHTML = specificSum(second_calc.c + second_calc.d); //50
    arr[44].innerHTML = specificSum(second_calc.h + second_calc.d); //55
    arr[42].innerHTML = specificSum(
        second_calc.h + parseInt(arr[44].innerHTML)
    ); //52-53
    arr[41].innerHTML = specificSum(
        second_calc.h + parseInt(arr[42].innerHTML)
    ); //51-52
    arr[43].innerHTML = specificSum(
        parseInt(arr[44].innerHTML) + parseInt(arr[42].innerHTML)
    ); //53-54
    arr[46].innerHTML = specificSum(
        parseInt(arr[44].innerHTML) + second_calc.d
    ); //57-58
    arr[47].innerHTML = specificSum(
        parseInt(arr[46].innerHTML) + second_calc.d
    ); //58-59
    arr[45].innerHTML = specificSum(
        parseInt(arr[44].innerHTML) + parseInt(arr[46].innerHTML)
    ); //56-57
    arr[48].innerHTML = specificSum(
        second_calc.a + second_calc.b + second_calc.c
    ); //60
    arr[52].innerHTML = specificSum(second_calc.d + second_calc.k); //65
    arr[50].innerHTML = specificSum(
        second_calc.d + parseInt(arr[52].innerHTML)
    ); //62-63
    arr[49].innerHTML = specificSum(
        second_calc.d + parseInt(arr[50].innerHTML)
    ); //61-62
    arr[51].innerHTML = specificSum(
        parseInt(arr[52].innerHTML) + parseInt(arr[50].innerHTML)
    ); //63-64
    arr[54].innerHTML = specificSum(
        parseInt(arr[52].innerHTML) + second_calc.k
    ); //67-68
    arr[55].innerHTML = specificSum(
        parseInt(arr[54].innerHTML) + second_calc.k
    ); //68-69
    arr[53].innerHTML = specificSum(
        parseInt(arr[52].innerHTML) + parseInt(arr[54].innerHTML)
    ); //66-67
    arr[56].innerHTML = specificSum(second_calc.d + second_calc.a); //70
    arr[60].innerHTML = specificSum(second_calc.k + second_calc.a); //75
    arr[58].innerHTML = specificSum(
        second_calc.k + parseInt(arr[60].innerHTML)
    ); //72-73
    arr[57].innerHTML = specificSum(
        second_calc.k + parseInt(arr[58].innerHTML)
    ); //71-72
    arr[59].innerHTML = specificSum(
        parseInt(arr[60].innerHTML) + parseInt(arr[58].innerHTML)
    ); //73-74
    arr[62].innerHTML = specificSum(
        parseInt(arr[60].innerHTML) + second_calc.a
    ); //77-78
    arr[63].innerHTML = specificSum(
        parseInt(arr[62].innerHTML) + second_calc.a
    ); //78-79
    arr[61].innerHTML = specificSum(
        parseInt(arr[62].innerHTML) + parseInt(arr[60].innerHTML)
    ); //76-77
    arr[64].innerHTML = second_calc.a; //80

    arr[0].innerHTML = specificSum(parseInt(arr[0].innerHTML) + prepare[0]);
    arr[8].innerHTML = specificSum(parseInt(arr[8].innerHTML) + prepare[8]);
    arr[4].innerHTML = specificSum(parseInt(arr[4].innerHTML) + prepare[4]);
    arr[2].innerHTML = specificSum(parseInt(arr[2].innerHTML) + prepare[2]);
    arr[1].innerHTML = specificSum(parseInt(arr[1].innerHTML) + prepare[1]);
    arr[3].innerHTML = specificSum(parseInt(arr[3].innerHTML) + prepare[3]);
    arr[6].innerHTML = specificSum(parseInt(arr[6].innerHTML) + prepare[6]);
    arr[7].innerHTML = specificSum(parseInt(arr[7].innerHTML) + prepare[7]);
    arr[5].innerHTML = specificSum(parseInt(arr[5].innerHTML) + prepare[5]);
    arr[12].innerHTML = specificSum(parseInt(arr[12].innerHTML) + prepare[12]);
    arr[10].innerHTML = specificSum(parseInt(arr[10].innerHTML) + prepare[10]);
    arr[9].innerHTML = specificSum(parseInt(arr[9].innerHTML) + prepare[9]);
    arr[11].innerHTML = specificSum(parseInt(arr[11].innerHTML) + prepare[11]);
    arr[14].innerHTML = specificSum(parseInt(arr[14].innerHTML) + prepare[14]);
    arr[15].innerHTML = specificSum(parseInt(arr[15].innerHTML) + prepare[15]);
    arr[13].innerHTML = specificSum(parseInt(arr[13].innerHTML) + prepare[13]);
    arr[16].innerHTML = specificSum(parseInt(arr[16].innerHTML) + prepare[16]);
    arr[20].innerHTML = specificSum(parseInt(arr[20].innerHTML) + prepare[20]);
    arr[18].innerHTML = specificSum(parseInt(arr[18].innerHTML) + prepare[18]);
    arr[17].innerHTML = specificSum(parseInt(arr[17].innerHTML) + prepare[17]);
    arr[19].innerHTML = specificSum(parseInt(arr[19].innerHTML) + prepare[19]);
    arr[22].innerHTML = specificSum(parseInt(arr[22].innerHTML) + prepare[22]);
    arr[23].innerHTML = specificSum(parseInt(arr[23].innerHTML) + prepare[23]);
    arr[21].innerHTML = specificSum(parseInt(arr[21].innerHTML) + prepare[21]);
    arr[24].innerHTML = specificSum(parseInt(arr[24].innerHTML) + prepare[24]);
    arr[28].innerHTML = specificSum(parseInt(arr[28].innerHTML) + prepare[28]);
    arr[26].innerHTML = specificSum(parseInt(arr[26].innerHTML) + prepare[26]);
    arr[25].innerHTML = specificSum(parseInt(arr[25].innerHTML) + prepare[25]);
    arr[27].innerHTML = specificSum(parseInt(arr[27].innerHTML) + prepare[27]);
    arr[30].innerHTML = specificSum(parseInt(arr[30].innerHTML) + prepare[30]);
    arr[31].innerHTML = specificSum(parseInt(arr[31].innerHTML) + prepare[31]);
    arr[29].innerHTML = specificSum(parseInt(arr[29].innerHTML) + prepare[29]);
    arr[32].innerHTML = specificSum(parseInt(arr[32].innerHTML) + prepare[32]);
    arr[36].innerHTML = specificSum(parseInt(arr[36].innerHTML) + prepare[36]);
    arr[34].innerHTML = specificSum(parseInt(arr[34].innerHTML) + prepare[34]);
    arr[33].innerHTML = specificSum(parseInt(arr[33].innerHTML) + prepare[33]);
    arr[35].innerHTML = specificSum(parseInt(arr[35].innerHTML) + prepare[35]);
    arr[38].innerHTML = specificSum(parseInt(arr[38].innerHTML) + prepare[38]);
    arr[39].innerHTML = specificSum(parseInt(arr[39].innerHTML) + prepare[39]);
    arr[37].innerHTML = specificSum(parseInt(arr[37].innerHTML) + prepare[37]);
    arr[40].innerHTML = specificSum(parseInt(arr[40].innerHTML) + prepare[40]);
    arr[44].innerHTML = specificSum(parseInt(arr[44].innerHTML) + prepare[44]);
    arr[42].innerHTML = specificSum(parseInt(arr[42].innerHTML) + prepare[42]);
    arr[41].innerHTML = specificSum(parseInt(arr[41].innerHTML) + prepare[41]);
    arr[43].innerHTML = specificSum(parseInt(arr[43].innerHTML) + prepare[43]);
    arr[46].innerHTML = specificSum(parseInt(arr[46].innerHTML) + prepare[46]);
    arr[47].innerHTML = specificSum(parseInt(arr[47].innerHTML) + prepare[47]);
    arr[45].innerHTML = specificSum(parseInt(arr[45].innerHTML) + prepare[45]);
    arr[48].innerHTML = specificSum(parseInt(arr[48].innerHTML) + prepare[48]);
    arr[52].innerHTML = specificSum(parseInt(arr[52].innerHTML) + prepare[52]);
    arr[50].innerHTML = specificSum(parseInt(arr[50].innerHTML) + prepare[50]);
    arr[49].innerHTML = specificSum(parseInt(arr[49].innerHTML) + prepare[49]);
    arr[51].innerHTML = specificSum(parseInt(arr[51].innerHTML) + prepare[51]);
    arr[54].innerHTML = specificSum(parseInt(arr[54].innerHTML) + prepare[54]);
    arr[55].innerHTML = specificSum(parseInt(arr[55].innerHTML) + prepare[55]);
    arr[53].innerHTML = specificSum(parseInt(arr[53].innerHTML) + prepare[53]);
    arr[56].innerHTML = specificSum(parseInt(arr[56].innerHTML) + prepare[56]);
    arr[60].innerHTML = specificSum(parseInt(arr[60].innerHTML) + prepare[60]);
    arr[58].innerHTML = specificSum(parseInt(arr[58].innerHTML) + prepare[58]);
    arr[57].innerHTML = specificSum(parseInt(arr[57].innerHTML) + prepare[57]);
    arr[59].innerHTML = specificSum(parseInt(arr[59].innerHTML) + prepare[59]);
    arr[62].innerHTML = specificSum(parseInt(arr[62].innerHTML) + prepare[62]);
    arr[63].innerHTML = specificSum(parseInt(arr[63].innerHTML) + prepare[63]);
    arr[61].innerHTML = specificSum(parseInt(arr[61].innerHTML) + prepare[61]);
    arr[64].innerHTML = specificSum(parseInt(arr[64].innerHTML) + prepare[64]);
}

function setDataToMatrix(calc) {
    $(".s2").html(calc.a); //a
    $(".s1").html(calc.b); //Ð±
    $(".mu1").html(calc.c); //Ð²
    $(".mu2").html(calc.d); //Ð³
    $(".ma").html(calc.e); //Ð´
    $(".t1").html(calc.f); //Ðµ
    $(".t2").html(calc.g); //Ð¶
    $(".t3").html(calc.h); //Ð¸
    $(".t4").html(calc.k); //Ð·
    $(".sv2").html(calc.l); //Ðº
    $(".sv1").html(calc.m); //Ð»
    $(".st3").html(calc.n); //Ð¼
    $(".st5").html(calc.o); //Ð½
    $(".st4").html(calc.p); //Ð¾

    $(".sky-value").html(calc.skyValue);
    $(".earth-value").html(calc.earthValue);
    $(".sky-earth-value").html(calc.skyAndEarth);

    $(".male-value").html(calc.maleValue);
    $(".female-value").html(calc.femaleValue);
    $(".male-female-value").html(calc.maleFemaleValue);

    $(".third_subtab .total_value").html(
        specificSum(calc.maleFemaleValue + calc.skyAndEarth)
    );

    $(".sp").html(calc.a);
    $(".adp").html(calc.s);
    $(".vp").html(calc.r);
    $(".anp").html(calc.t);
    $(".map").html(calc.e);
    $(".svp").html(calc.m);
    $(".mup").html(calc.c);
    $(".tp").html(calc.totalp);

    $(".sen").html(calc.b);
    $(".aden").html(calc.s1);
    $(".ven").html(calc.r1);
    $(".anen").html(calc.t1);
    $(".maen").html(calc.e);
    $(".sven").html(calc.l);
    $(".muen").html(calc.d);
    $(".ten").html(calc.totalen);

    $(".v2").html(calc.r);
    $(".ad2").html(calc.s);
    $(".an2").html(calc.t);

    $(".v1").html(calc.r1);
    $(".ad1").html(calc.s1);
    $(".an1").html(calc.t1);

    $(".st1").html(calc.smtr);
    $(".st2").html(calc.smtb);

    $(".sem").html(calc.tab);
    $(".adem").html(calc.ts1s);
    $(".vem").html(calc.tr1r);
    $(".anem").html(calc.tt1t);
    $(".maem").html(calc.tee);
    $(".svem").html(calc.tlm);
    $(".muem").html(calc.tdc);
    $(".tem").html(calc.totalem);
}

function calculate() {
    let day = parseInt($(".input_data #day").find(":selected").text());
    let month = parseInt($(".input_data #month").find(":selected").text());
    let year = parseInt($(".input_data #year").find(":selected").text());

    $("#second_pseudo_page").css("display", "block");

    let calc = new CalcData(day, month, year);
    setDataToMatrix(calc);
    setDataToTable(calc);
}
