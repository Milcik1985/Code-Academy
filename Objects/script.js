console.groupCollapsed ('objects')
// // UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
const company1 = {}
// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
company1[`company name`] = 'ABComp'
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
company1.opened = 2001
// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
company1.companyCode = 2467895412
// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
company1.employees = 850
// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
company1.ceo = 'Romanas Venskus'
// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
company1.nvoStatus = false
// 2.7. Property „workingLocations" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
company1.workingLocations = ['Lithuania', 'Germany']
// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
company1.activityAreas = ['pardavimas', 'supirkimas']
// 2.9. Property „contacts", kuris turės:
company1.contacts = {}
//       2.9.1. „phone"
company1.contacts.phone = '+370664865237'
//       2.9.2. „email"
company1.contacts.email = 'ABComp@info.lt'
//       2.9.3. „address", kuris turės:
company1.contacts.address = {}
//           2.9.3.1. „country"
company1.contacts.address.country = 'Lithuania'
//           2.9.3.2. „city"
company1.contacts.address.city = 'Vilnius'
//           2.9.3.3. „street"
company1.contacts.address.street = 'Olimpieciu'
//           2.9.3.4. „apartment"
company1.contacts.address.apartment = 5

console.log(company1)

const company2 = {'company name': 'UABComp',
opened: 1991,
companyCode: 123456789,
employees: 1235,
ceo: 'Romanas Venckus',
nvoStatus: false,
workingLocations:['Lithuania', 'Poland'],
activityAreas: ['pardavimas', 'supirkimas'],
contacts: {
    phone: '+37067942956', 
    email: 'UABComp@instanceof.lt', 
    address: {
        country: 'Lithuania',
        city: 'Vilnius',
        street: 'Vikingu',
        apartment: '3',}
    }}

    console.log(company2)

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".  

company1.getFullAddress = function () {
        let output = `Adress is: ${this.contacts.address.country}, ${this.contacts.address.city}, ${this.contacts.address.street} st. ${this.contacts.address.apartment},`
      return output}
console.log(company1.getFullAddress())

company2.getFullAddress = function () {
    let output = `Adress is: ${this.contacts.address.country}, ${this.contacts.address.city}, ${this.contacts.address.street} st. ${this.contacts.address.apartment},`
  return output}
console.log(company2.getFullAddress())

// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
console.log(company1.nvoStatus)
console.log(company2.nvoStatus)

company1.nvoStatus = true
company2.nvoStatus = true

console.log(company1.nvoStatus)
console.log(company2.nvoStatus)

//        6.2. Pakeičia NVO statusą į false.
company1.nvoStatus = false
company2.nvoStatus = false
console.log(company1.nvoStatus)
console.log(company2.nvoStatus)

//        6.3. Keičia NVO statusą iš true į false ir iš false į true.
company1.switchNvoStatus = function () { 
    this.nvoStatus = !this.nvoStatus
    return this.nvoStatus;}

    company2.switchNvoStatus = function () { 
        this.nvoStatus = !this.nvoStatus
        return this.nvoStatus;}

    console.log(company1.switchNvoStatus())
    console.log(company2.switchNvoStatus())

// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
console.log(company1.workingLocations)
console.log(company2.workingLocations)

company1.getWorkingLocations = function() {
    let output = `Working locations: ${this.workingLocations.join(', ')}.`
    return output
  }
  
company2.getWorkingLocations = function() {
    let output = `Working locations: ${this.workingLocations.join(', ')}.`
    return output
  }

  console.log(company1.getWorkingLocations())
  console.log(company2.getWorkingLocations())

//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.

console.log(company1.activityAreas)
console.log(company2.activityAreas)

company1.getactivityAreas = function() {
    let output = `Activity areas: ${this.activityAreas.join(', ')}.`
    return output
  }

  company2.getactivityAreas = function() {
    let output = `Activity areas: ${this.activityAreas.join(', ')}.`
    return output
  }

  console.log(company1.getactivityAreas())
console.log(company2.getactivityAreas())

// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
console.log(company1.workingLocations)

company1.setNewWorkingLocations = function(newWorkingLocation) {
    this.workingLocations.push(newWorkingLocation)
return this.workingLocations}

console.log(company1.setNewWorkingLocations('Latvia'))

console.log(company2.workingLocations)

company2.setNewWorkingLocations = function(newWorkingLocation) {
    this.workingLocations.push(newWorkingLocation)
return this.workingLocations}

console.log(company2.setNewWorkingLocations('Estonia'))

//        8.2. Naują veiklos rūšį prie veiklų masyvo.
console.log(company1.activityAreas)
company1.setNewActivityAreas = function(NewActivityArea) {
    this.activityAreas.push(NewActivityArea)
    return this.activityAreas
}
console.log(company1.setNewActivityAreas('b2b sales'))

console.log(company2.activityAreas)

company2.setNewActivityAreas = function(NewActivityArea) {
    this.activityAreas.push(NewActivityArea)
    return this.activityAreas
}

console.log(company2.setNewActivityAreas('b2c sales'))

// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
company1.removeWorkingLocation = function(locationToRemove) {
    let updatedWorkingLocations = this.workingLocations.filter(location => location !== locationToRemove)
    this.workingLocations = updatedWorkingLocations
  
    return this.workingLocations
  }
  console.log(company1.removeWorkingLocation('Latvia'))

  company2.removeWorkingLocation = function(locationToRemove) {
    let updatedWorkingLocations = this.workingLocations.filter(location => location !== locationToRemove)
    this.workingLocations = updatedWorkingLocations
  
    return this.workingLocations
  }
  console.log(company2.removeWorkingLocation('Estonia'))

//        9.2. Veiklos rūšį iš veiklų masyvo.

company1.removeActivityArea = function(activityToRemove) {
    let updatedActivityAreas = this.activityAreas.filter(activity => activity !== activityToRemove)
    this.activityAreas = updatedActivityAreas
  
    return this.activityAreas
  }
  console.log(company1.removeActivityArea('b2b sales'))

  company2.removeActivityArea = function(activityToRemove) {
    let updatedActivityAreas = this.activityAreas.filter(activity => activity !== activityToRemove)
    this.activityAreas = updatedActivityAreas
  
    return this.activityAreas
  }
  console.log(company2.removeActivityArea('b2c sales'))

console.groupEnd()

