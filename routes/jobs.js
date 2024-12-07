const express = require('express');
   const router = express.Router();
   const Job = require('../models/Job');

   router.get('/', async (req, res) => {
       try {
           const jobs = await Job.find();
           res.json(jobs);
       } catch (err) {
           res.status(500).json({ message: err.message });
       }
   });

   router.post('/', async (req, res) => {
       const job = new Job(req.body);
       try {
           const savedJob = await job.save();
           res.status(201).json(savedJob);
       } catch (err) {
           res.status(400).json({ message: err.message });
       }
   });

   router.put('/:id', async (req, res) => {
       try {
           const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
           res.json(job);
       } catch (err) {
           res.status(400).json({ message: err.message });
       }
   });

   router.delete('/:id', async (req, res) => {
       try {
           await Job.findByIdAndDelete(req.params.id);
           res.json({ message: 'Job deleted' });
       } catch (err) {
           res.status(500).json({ message: err.message });
       }
   });

   module.exports = router;