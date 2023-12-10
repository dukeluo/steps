import db, { findAllSteps } from '@steps/db-core'
import { cache } from 'react'

export const getAllSteps = cache(async () => await findAllSteps(db))
