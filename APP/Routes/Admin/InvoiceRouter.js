const express = require('express');
const { CreateInvoice } = require('../../Controller/Admin/InvoiceController');
const InvoiceRoutes = express.Router();

InvoiceRoutes.post('/invoice-create/:invoicenumber' , CreateInvoice);

module.exports = InvoiceRoutes