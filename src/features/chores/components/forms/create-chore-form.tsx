'use client'

import React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { createChore } from '../../actions/create-chore'

export function CreateChoreForm() {
  return (
    <form action={createChore} className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          placeholder="add title..."
          name="title"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="content">Description</Label>
        <Textarea
          id="content"
          placeholder="add description..."
          name="content"
          required
        />
      </div>
      <Button type="submit">Create</Button>
    </form>
  )
}
