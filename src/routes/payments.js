const express = require('express');
const {
  createPaymentIntent,
  confirmPayment,
  refundPayment
} = require('../controllers/paymentController');
const { protect, restrictTo } = require('../middleware/auth');

const router = express.Router();

router.post('/create-payment-intent', protect, createPaymentIntent);
router.post('/confirm', protect, confirmPayment);
router.post('/refund', protect, restrictTo('admin'), refundPayment);

module.exports = router;