//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.get('/cb-text1', function (req, res) {
  res.render('cb-text1')
})

router.get('/cb-question1', function (req, res) {
  res.render('cb-question1')
})

router.post('/cb-question1', function (req, res) {
  const answer = req.body.passport

  if (answer === 'yes') {
    res.redirect('/passport-details')
  } else {
    res.redirect('/no-passport-info')
  }
})

router.get('/passport-details', function (req, res) {
  res.render('passport-details')
})

router.post('/passport-details', function (req, res) {
  const answer = req.body.why

  if (answer === 'yes') {
    res.redirect('/uk-base')
  } else {
    res.redirect('/rest-test')
  }
})