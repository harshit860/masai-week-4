// 
var main_array = []
var total1 = 0;
var total2 = 0;
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
    document.getElementById("cal").value = '';

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
    var display_container = document.getElementById("name");

    //Clearing All Input Feilds
    clear();

    for (var i = 0; i <= main_array.length; i++) {
        element = document.createElement('p')
        element2 = document.createElement('p')

        element.setAttribute('class', 'big')
        element.textContent = main_array[i].name
        element2.setAttribute('class', 'big')
        element2.textContent = main_array[i].weight

        display_container.appendChild(element)
        display_container.appendChild(element2)

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
    document.getElementById("excercise").value = ''
    document.getElementById("calburn").value = ''
    console.log(caloriesout_input)
}

function total() {

    for (var a = 0; a < caloriesin_input.length; a++) {

        total1 = total1 + Number(caloriesin_input[a]);

    }
    for (var i = 0; i < caloriesout_input.length; i++) {
        total2 = total2 + Number(caloriesout_input[i]);
    }
    // for()
    var body = document.getElementById('ttl')
    var body2 = document.getElementById('body2')
    var ele = document.createElement('p')
    var ele2 = document.createElement('p')
    var ele3 = document.createElement('p')

    ele.textContent = 'Total Calories Consumed by' + total1;
    ele2.textContent = 'Total Calories Spend' + total2;
    var diff = total1 - total2;
    ele3.innerHTML = diff;
    if (total1 <= 2500 && total2 >= 100) {
        var elem4 = document.createElement('p');
        elem4.textContent = "Your calories intake is proper Keep going"
        body2.appendChild(elem4)
    }
    if (total1 > 2500 && total2 <= 100) {
        var elem5 = document.createElement('p')
        elem5.textContent = "Eat less Work more Calorie Intake not Proper"
        body2.appendChild(elem5)
    }
    body.appendChild(ele)
    body.appendChild(ele2)
    body2.appendChild(ele3)

}
