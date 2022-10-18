function calculate(){
    var select = document.getElementById("selectFromUnit");
    var value = select.options[select.selectedIndex].value;
    var inputvalue = document.getElementById("From").value;
    console.log(inputvalue + value);
    var selectTo = document.getElementById("selectToUnit");
    var valueTo = selectTo.options[selectTo.selectedIndex].value;
    console.log(valueTo);

    // [cm -> m] and [cm -> km]

    if((value === 'cm') && ( valueTo === 'm')){
        var cm_to_m = inputvalue * 0.001;
        document.getElementById("outputscreen").value = cm_to_m;
    }
    if((value === 'cm') && ( valueTo === 'km')){
        var cm_to_km = inputvalue * 0.00001;
        document.getElementById("outputscreen").value = cm_to_km;
    }
    if((value === 'cm') && ( valueTo === 'mm')){
        var cm_to_mm = inputvalue * 10 ;
        document.getElementById("outputscreen").value = cm_to_mm;
    }
    if((value === 'cm') && ( valueTo === 'dm')){
        var cm_to_dm = inputvalue * 0.1 ;
        document.getElementById("outputscreen").value = cm_to_dm;
    }
    if((value === 'cm') && ( valueTo === 'ft')){
        var cm_to_ft = inputvalue * 0.032808399;
        document.getElementById("outputscreen").value = cm_to_ft;
    }
    if((value === 'cm') && ( valueTo === 'in')){
        var cm_to_in = inputvalue * 0.393700787;
        document.getElementById("outputscreen").value = cm_to_in;
    }
    if((value === 'cm') && ( valueTo === 'yd')){
        var cm_to_yd = inputvalue * 0.010936133;
        document.getElementById("outputscreen").value = cm_to_yd;
    }
    if((value === 'cm') && ( valueTo === 'mi')){
        var cm_to_mi = inputvalue * 0.000006214;
        document.getElementById("outputscreen").value = cm_to_mi;
    }

    // [m -> cm] and [m -> km]

    if((value === 'm' ) && (valueTo === 'cm')){
        var m_to_cm = inputvalue * 100;
        document.getElementById("outputscreen").value = m_to_cm;
    }
    if((value === 'm' ) && (valueTo === 'km')){
        var m_to_km = inputvalue * 0.001;
        document.getElementById("outputscreen").value = m_to_km;
    }
    if((value === 'm' ) && (valueTo === 'mm')){
        var m_to_mm = inputvalue * 1000;
        document.getElementById("outputscreen").value = m_to_mm;
    }
    if((value === 'm' ) && (valueTo === 'dm')){
        var m_to_dm = inputvalue * 10;
        document.getElementById("outputscreen").value = m_to_dm;
    }
    if((value === 'm' ) && (valueTo === 'ft')){
        var m_to_ft = inputvalue * 3.2808399;
        document.getElementById("outputscreen").value = m_to_ft;
    }
    if((value === 'm' ) && (valueTo === 'in')){
        var m_to_in = inputvalue * 39.3700787;
        document.getElementById("outputscreen").value = m_to_in;
    }
    if((value === 'm' ) && (valueTo === 'yd')){
        var m_to_yd = inputvalue * 1.0936133;
        document.getElementById("outputscreen").value = m_to_yd;
    }
    if((value === 'm' ) && (valueTo === 'mi')){
        var m_to_mi = inputvalue * 0.0006214;
        document.getElementById("outputscreen").value = m_to_mi;
    }

    // [km -> m] and [km -> cm]

    if((value === 'km' ) && (valueTo === 'm')){
        var km_to_m = inputvalue * 1000;
        document.getElementById("outputscreen").value = km_to_m;
    }
    if( (value === 'km') && (valueTo === 'cm')){
        var km_to_cm = inputvalue * 100000;
        document.getElementById("outputscreen").value = km_to_cm;
    }
    if( (value === 'km') && (valueTo === 'mm')){
        var km_to_mm = inputvalue * 1000000;
        document.getElementById("outputscreen").value = km_to_mm;
    }
    if((value === 'km' ) && (valueTo === 'dm')){
        var km_to_dm = inputvalue * 10000;
        document.getElementById("outputscreen").value = km_to_dm;
    }
    if((value === 'km' ) && (valueTo === 'ft')){
        var km_to_ft = inputvalue * 3280.8399;
        document.getElementById("outputscreen").value = km_to_ft;
    }
    if((value === 'km' ) && (valueTo === 'in')){
        var km_to_in = inputvalue * 39370.0787;
        document.getElementById("outputscreen").value = km_to_in;
    }
    if((value === 'km' ) && (valueTo === 'yd')){
        var km_to_yd = inputvalue * 1093.6133;
        document.getElementById("outputscreen").value = km_to_yd;
    }
    if((value === 'km' ) && (valueTo === 'mi')){
        var km_to_mi = inputvalue * 0.6214;
        document.getElementById("outputscreen").value = km_to_mi;
    }

    // [mm -> cm] and [mm -> km] and [mm -> m]
    
    if((value === 'mm' ) && (valueTo === 'cm')){
        var mm_to_cm = inputvalue * 0.1;
        document.getElementById("outputscreen").value = mm_to_cm;
    }
    if((value === 'mm' ) && (valueTo === 'km')){
        var mm_to_km = inputvalue * 0.000001;
        document.getElementById("outputscreen").value = mm_to_km;
    }
    if((value === 'mm' ) && (valueTo === 'm')){
        var mm_to_m = inputvalue * 0.001;
        document.getElementById("outputscreen").value = mm_to_m;
    }
    if((value === 'mm' ) && (valueTo === 'dm')){
        var mm_to_dm = inputvalue * 0.01;
        document.getElementById("outputscreen").value = mm_to_dm;
    }
    if((value === 'mm' ) && (valueTo === 'ft')){
        var mm_to_ft = inputvalue * 0.0032808399;
        document.getElementById("outputscreen").value = mm_to_ft;
    }
    if((value === 'mm' ) && (valueTo === 'in')){
        var mm_to_in = inputvalue * 0.0393700787;
        document.getElementById("outputscreen").value = mm_to_in;
    }
    if((value === 'mm' ) && (valueTo === 'yd')){
        var mm_to_yd = inputvalue * 0.0010936133;
        document.getElementById("outputscreen").value = mm_to_yd;
    }
    if((value === 'mm' ) && (valueTo === 'mi')){
        var mm_to_mi = inputvalue * 0.0000006214;
        document.getElementById("outputscreen").value = mm_to_mi;
    }

// DM TO MANY


    if((value === 'dm' ) && (valueTo === 'cm')){
        var dm_to_cm = inputvalue * 10;
        document.getElementById("outputscreen").value = dm_to_cm;
    }
    if((value === 'dm' ) && (valueTo === 'km')){
        var dm_to_km = inputvalue * 0.0001;
        document.getElementById("outputscreen").value = dm_to_km;
    }
    if((value === 'dm' ) && (valueTo === 'm')){
        var dm_to_m = inputvalue * 0.1;
        document.getElementById("outputscreen").value = dm_to_m;
    }
    if((value === 'dm' ) && (valueTo === 'mm')){
        var dm_to_mm = inputvalue * 100;
        document.getElementById("outputscreen").value = dm_to_mm;
    }
    if((value === 'dm' ) && (valueTo === 'ft')){
        var dm_to_ft = inputvalue * 0.32808399;
        document.getElementById("outputscreen").value = dm_to_ft;
    }
    if((value === 'dm' ) && (valueTo === 'in')){
        var dm_to_in = inputvalue * 3.93700787;
        document.getElementById("outputscreen").value = dm_to_in;
    }
    if((value === 'dm' ) && (valueTo === 'yd')){
        var dm_to_yd = inputvalue * 0.10936133;
        document.getElementById("outputscreen").value = dm_to_yd;
    }
    if((value === 'dm' ) && (valueTo === 'mi')){
        var dm_to_mi = inputvalue * 0.00006214;
        document.getElementById("outputscreen").value = dm_to_mi;
    }

// FT to many

if((value === 'ft' ) && (valueTo === 'cm')){
    var ft_to_cm = inputvalue * 30.4799999536704;
    document.getElementById("outputscreen").value = ft_to_cm;
}
if((value === 'ft' ) && (valueTo === 'km')){
    var ft_to_km = inputvalue * 0.000304799999536704;
    document.getElementById("outputscreen").value = ft_to_km;
}
if((value === 'ft' ) && (valueTo === 'm')){
    var ft_to_m = inputvalue * 0.304799999536704;
    document.getElementById("outputscreen").value = ft_to_m;
}
if((value === 'ft' ) && (valueTo === 'mm')){
    var ft_to_mm = inputvalue * 304.799999536704;
    document.getElementById("outputscreen").value = ft_to_mm;
}
if((value === 'ft' ) && (valueTo === 'dm')){
    var ft_to_dm = inputvalue * 3.04799999536704;
    document.getElementById("outputscreen").value = ft_to_dm;
}
if((value === 'ft' ) && (valueTo === 'in')){
    var ft_to_in = inputvalue * 11.9999999695200000186048;
    document.getElementById("outputscreen").value = ft_to_in;
}
if((value === 'ft' ) && (valueTo === 'yd')){
    var ft_to_yd = inputvalue * 0.3333333333333333325632;
    document.getElementById("outputscreen").value = ft_to_yd;
}
if((value === 'ft' ) && (valueTo === 'mi')){
    var ft_to_mi = inputvalue * 0.0001894027197121078656;
    document.getElementById("outputscreen").value = ft_to_mi;
}


    // inches to many
    if((value === 'in' ) && (valueTo === 'cm')){
        var in_to_cm = inputvalue * 2.5400000025908;
        document.getElementById("outputscreen").value = in_to_cm;
    }
    if((value === 'in' ) && (valueTo === 'km')){
        var in_to_km = inputvalue * 0.000025400000025908;
        document.getElementById("outputscreen").value = in_to_km;
    }
    if((value === 'in' ) && (valueTo === 'm')){
        var in_to_m = inputvalue * 0.025400000025908;
        document.getElementById("outputscreen").value = in_to_m;
    }
    if((value === 'in' ) && (valueTo === 'mm')){
        var in_to_mm = inputvalue * 25.400000025908;
        document.getElementById("outputscreen").value = in_to_mm;
    }
    if((value === 'in' ) && (valueTo === 'dm')){
        var in_to_ft = inputvalue * 0.25400000025908;
        document.getElementById("outputscreen").value = in_to_ft;
    }
    if((value === 'in' ) && (valueTo === 'ft')){
        var in_to_ft = inputvalue * 0.033333335450000001292;
        document.getElementById("outputscreen").value = in_to_ft;
    }
    if((value === 'in' ) && (valueTo === 'yd')){
        var in_to_yd = inputvalue * 0.0277777778483333333764;
        document.getElementById("outputscreen").value = in_to_yd;
    }
    if((value === 'in' ) && (valueTo === 'mi')){
        var in_to_mi = inputvalue * 0.0000157835600160992312;
        document.getElementById("outputscreen").value = in_to_mi;
    }

// Yard
if((value === 'yd' ) && (valueTo === 'cm')){
    var yd_to_cm = inputvalue * 91.4399998610112;
    document.getElementById("outputscreen").value = yd_to_cm;
}
if((value === 'yd' ) && (valueTo === 'km')){
    var yd_to_km = inputvalue * 0.000914399998610112;
    document.getElementById("outputscreen").value = yd_to_km;
}
if((value === 'yd' ) && (valueTo === 'm')){
    var yd_to_m = inputvalue * 0.914399998610112;
    document.getElementById("outputscreen").value = yd_to_m;
}
if((value === 'yd' ) && (valueTo === 'mm')){
    var yd_to_mm = inputvalue * 914.399998610112;
    document.getElementById("outputscreen").value = yd_to_mm;
}
if((value === 'yd' ) && (valueTo === 'dm')){
    var yd_to_ft = inputvalue * 9.14399998610112;
    document.getElementById("outputscreen").value = yd_to_ft;
}
if((value === 'yd' ) && (valueTo === 'ft')){
    var yd_to_in = inputvalue * 2.9999999999999999930688;
    document.getElementById("outputscreen").value = yd_to_in;
}
if((value === 'yd' ) && (valueTo === 'in')){
    var yd_to_in = inputvalue * 35.9999999085600000558144;
    document.getElementById("outputscreen").value = yd_to_in;
}
if((value === 'yd' ) && (valueTo === 'mi')){
    var yd_to_mi = inputvalue * 0.0005682081591363235968;
    document.getElementById("outputscreen").value = yd_to_mi;
}

// Mile to many
if((value === 'mi' ) && (valueTo === 'cm')){
    var mi_to_cm = inputvalue * 160934.4;
    document.getElementById("outputscreen").value = mi_to_cm;
}
if((value === 'mi' ) && (valueTo === 'km')){
    var mi_to_km = inputvalue * 1.609344;
    document.getElementById("outputscreen").value = mi_to_km;
}
if((value === 'mi' ) && (valueTo === 'm')){
    var mi_to_m = inputvalue * 1609.344;
    document.getElementById("outputscreen").value = mi_to_m;
}
if((value === 'mi' ) && (valueTo === 'mm')){
    var mi_to_mm = inputvalue * 1609344;
    document.getElementById("outputscreen").value = mi_to_mm;
}
if((value === 'mi' ) && (valueTo === 'dm')){
    var mi_to_dm = inputvalue * 16093.4;
    document.getElementById("outputscreen").value = mi_to_dm;
}
if((value === 'mi' ) && (valueTo === 'ft')){
    var mi_to_ft = inputvalue * 5280;
    document.getElementById("outputscreen").value = mi_to_ft;
}
if((value === 'mi' ) && (valueTo === 'in')){
    var mi_to_in = inputvalue * 63360;
    document.getElementById("outputscreen").value = mi_to_in;
}
if((value === 'mi' ) && (valueTo === 'yd')){
    var mi_to_yd = inputvalue * 1760;
    document.getElementById("outputscreen").value = mi_to_yd;
}

// Same


    if( (value === 'km') && (valueTo === 'km')){
        document.getElementById("outputscreen").value = inputvalue;
    }
    if( (value === 'm') && (valueTo === 'm')){
        document.getElementById("outputscreen").value = inputvalue;
    }
    if( (value === 'cm') && (valueTo === 'cm')){
        document.getElementById("outputscreen").value = inputvalue;
    }
    if( (value === 'mm') && (valueTo === 'mm')){
        document.getElementById("outputscreen").value = inputvalue;
    }
    if( (value === 'dm') && (valueTo === 'dm')){
        document.getElementById("outputscreen").value = inputvalue;
    }
    if( (value === 'yd') && (valueTo === 'yd')){
        document.getElementById("outputscreen").value = inputvalue;
    }
    if( (value === 'ft') && (valueTo === 'ft')){
        document.getElementById("outputscreen").value = inputvalue;
    }
    if( (value === 'in') && (valueTo === 'in')){
        document.getElementById("outputscreen").value = inputvalue;
    }
    if( (value === 'mm') && (valueTo === 'mm')){
        document.getElementById("outputscreen").value = inputvalue;
    }

    document.getElementById("buttonhighlight").style.boxShadow = 'none';
}

function highlight(){
    document.getElementById("buttonhighlight").style.boxShadow = '0px 10px 30px #3553b4';

}

// WEIGHT

function calculatew(){
    var selectw = document.getElementById("selectFromUnitw");
    var valuew = selectw.options[selectw.selectedIndex].value;
    var inputvaluew = document.getElementById("Fromw").value;
    console.log(inputvaluew + valuew);

    var selectTow = document.getElementById("selectToUnitw");
    var valueTow = selectTow.options[selectTow.selectedIndex].value;
    console.log(valueTow);

    // [mg -> g] and [mg -> kg]

    if((valuew === 'mg') && ( valueTow === 'g')){
        var mg_to_g = inputvaluew * 0.001;
        document.getElementById("outputscreenw").value = mg_to_g;
    }
    if((valuew === 'mg') && ( valueTow === 'kg')){
        var mg_to_kg = inputvaluew * 0.000001;
        document.getElementById("outputscreenw").value = mg_to_kg;
    }

    // [g -> mg] and [g -> kg]

    if((valuew === 'g' ) && (valueTow === 'mg')){
        var g_to_mg = inputvaluew * 1000;
        document.getElementById("outputscreenw").value = g_to_mg;
    }
    if((valuew === 'g' ) && (valueTow === 'kg')){
        var g_to_kg = inputvaluew * 0.001;
        document.getElementById("outputscreenw").value = g_to_kg;
    }

    // [kg -> g] and [kg -> mg]

    if((valuew === 'kg' ) && (valueTow === 'g')){
        var kg_to_g = inputvaluew * 1000;
        document.getElementById("outputscreenw").value = kg_to_g;
    }
    if( (valuew === 'kg') && (valueTow === 'mg')){
        var kg_to_mg = inputvaluew * 1000000;
        document.getElementById("outputscreenw").value = kg_to_mg;
    }

    if( (valuew === 'kg') && (valueTow === 'kg')){
        document.getElementById("outputscreenw").value = inputvaluew;
    }
    if( (valuew === 'g') && (valueTow === 'g')){
        document.getElementById("outputscreenw").value = inputvaluew;
    }
    if( (valuew === 'mg') && (valueTow === 'mg')){
        document.getElementById("outputscreenw").value = inputvaluew;
    }
    document.getElementById("buttonhighlightw").style.boxShadow = 'none';
}

function highlightw(){
    document.getElementById("buttonhighlightw").style.boxShadow = '0px 10px 30px #3553b4';

}