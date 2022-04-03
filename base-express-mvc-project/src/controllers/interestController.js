class interestController{
 constructor (){
  this.renderResulInterest = this.renderResulInterest.bind(this)
 }

  getinterestCalculation(capital, interestRate, years){ 
   const result= capital * (interestRate/100) * years

  return result 
  }
 renderinterestCalculation (req, res){
  res.render('interestCalculation')
 }
 renderResulInterest (req, res){
   console.log('req',req)
    const capital=  (req.body.capital)
    const interestRate=  (req.body.interestRate)
    const years=  (req.body.years)

    res.render('resultInterest',{
      capital:capital,
      interestRate:interestRate,
      years: years,
      result: this.getinterestCalculation (capital, interestRate, years)
    })
  }
}

 module.exports = interestController