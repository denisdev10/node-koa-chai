'use strict'

// const assert = require('chai').assert
const sinon = require('sinon')
const endpoints = require('./documents')

describe('documents', () => {
  const sandbox = sinon.createSandbox()

  before(async () => {
    sandbox.stub(endpoints, 'create')
    sandbox.stub(endpoints, 'update')
    sandbox.stub(endpoints, 'list')
    sandbox.stub(endpoints, 'read')
    sandbox.stub(endpoints, 'delete')
  })

  afterEach(() => sandbox.reset())
  after(() => {
    sandbox.restore()
  })

  it('POST / should create a new document', async () => {})

  it('GET /:document should respond with the document', async () => {})

  it('GET / should respond with the documents by the requested field', async () => {})

  it('PATCH / should update a new document', async () => {})

  it('PATCH / should 404 if update document fails', async () => {})

  it('DELETE / should delete a document', async () => {})
})
