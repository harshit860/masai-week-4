// 
var main_array = []
var total1 =0
var name_input
var weight_input
var food_input = []
var caloriesin_input = []
var excercise_input = []
var caloriesout_input = []

function Health(name, weight, meal, calories_food, excercise, calories_burn) {
    this.name = name;
    this.weight = weight;
    this.meal = meal;
    this.calories_food = calories_food;
    this.excercise = excercise;
    this.calories_burn = calories_burn;
    this.show = function () {
        var display = ''
        for (key in this) {
            display = display + key + ':' + this[key] + '\n'

            if (key == this.show)
                break;
            if (key == 'calories_burn')
                break;
        }
        return display;
    }
}
var btn = document.getElementById('createmeal')
btn.addEventListener('click', createmeal)

function createmeal() {
    console.log('before', food_input)
    food_input.push(document.getElementById("meal").value)
    caloriesin_input.push(Number(document.getElementById("cal").value))
    document.getElementById("meal").value = '';
    document.getElementById("cal").value='';
    
    console.log('after', food_input)
}
function add_health() {
    console.log()
    name_input = document.getElementById('namein').value
    weight_input = document.getElementById('weightin').value
    //     food_input = document.getElementById('mealin').value
    //    caloriesin_input = document.getElementById('cal').value
    // excercise_input = document.getElementById('excercise').value
    //  var caloriesout_input = document.getElementById('').value

    var health = new Health(name_input, weight_input, food_input, caloriesin_input, excercise_input)

    main_array.push(health);
    console.log(caloriesin_input)

}

function display_all() {
    var display_container = document.getElementById("displayall");
    //Clearing All Input Feilds
    clear();

    for (var i = 0; i <= main_array.length; i++) {
        element = document.createElement('p')
        element.textContent = main_array[i].show();
        display_container.appendChild(element)
    }
}

function clear() {
    document.getElementById('namein').value = ''
    document.getElementById('weightin').value = ''
    // document.getElementById('mealin').value = ''
    // document.getElementById('calin').value = ''
    document.getElementById('excercise').value = ''
}

function calculate() {
    excercise_input.push(document.getElementById("excercise").value)
    caloriesout_input.push(Number(document.getElementById("calburn").value))
    console.log(caloriesout_input)
    document.getElementById("excercise").value=''
    document.getElementById("calburn").value=''
}

function total() {
    
    for (var a = 0; a < caloriesin_input.length; a++) {
       
        total1 = total1 + Number(caloriesin_input[a]);
        
    }
    var body=document.getElementById('ttl')
    var ele=document.createElement('p')
    ele.textContent=total1;
    body.appendChild(ele)
    console.log(total1)
}
