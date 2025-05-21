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
// Ash steps
router.get('/smri-declaration', function (req, res) {
  res.render('smri-declaration')
})

// Did not add AND make sure this file ends with: module.exports = router

// Move to next page
router.post('/smri-declaration', function (req, res) {
  res.redirect('/smri-fit1') 
})
// Next 1
router.get('/smri-fit1', function (req, res) {
  res.render('smri-fit1')
})

router.post('/smri-fit1', function (req, res) {
  const answer = req.body.smri1

  if (answer === 'yes') {
    res.redirect('/smri-fit2-yes')
  } else {
    res.redirect('/smri-fit2-no')
  }
})
// Next 2
router.get('/smri-fit2-yes', function (req, res) {
  res.render('smri-fit2-yes')
})

router.post('/smri-fit2-yes', function (req, res) {
  const answer = req.body.smri2

  if (answer === 'yes') {
    res.redirect('/smri-fit3-yes')
  } else {
    res.redirect('/smri-fit3-no')
  }
})
// Next 3 yes post was smri-fit2-yes
router.get('/smri-fit3-yes', function (req, res) {
  res.render('smri-fit3-yes')
})

router.post('/smri-fit3-yes', function (req, res) {
  const answer = req.body.smri3

  if (answer === 'yes') {
    res.redirect('/smri-fit4-yes')
  } else {
    res.redirect('/smri-fit4-no')
  }
})

// Next 3 no

router.get('/smri-fit3-no', function (req, res) {
  res.render('smri-fit3-no')
})

router.post('/smri-fit3-no', function (req, res) {
  res.redirect('/smri-declaration') 
})

// Next 4 yes
router.get('/smri-fit4-yes', function (req, res) {
  res.render('smri-fit4-yes')
})

router.post('/smri-fit4-yes', function (req, res) {
  const answer = req.body.smri4

  if (answer === 'yes') {
    res.redirect('/smri-fit5-yes')
  } else {
    res.redirect('/smri-fit5-no')
  }
})

// Next 5 yes

router.get('/smri-fit5-yes', function (req, res) {
  res.render('smri-fit5-yes')
})

router.post('/smri-fit5-yes', function (req, res) {
  res.redirect('/smri-end') 
})

// Next 5 yes

router.get('/smri-end', function (req, res) {
  res.render('smri-end')
})

router.post('/smri-end', function (req, res) {
  res.redirect('/smri-declaration') 
})