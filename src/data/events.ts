/**
 * Fallout Shelter Ecovillage events.
 *
 * The live WordPress site listed recurring gatherings rather than dated events
 * (the only dated entry was stale from 2018). When future scheduled events are
 * confirmed by the organization, add them to `upcoming`. The homepage will
 * render an empty-state if `upcoming` is empty.
 */

export interface UpcomingEvent {
  title: string
  date: string // ISO date or human readable
  location: string
  description: string
}

export interface RecurringEvent {
  title: string
  cadence: string
  location: string
  description: string
}

export const upcoming: UpcomingEvent[] = []

export const recurring: RecurringEvent[] = [
  {
    title: 'Community Social',
    cadence: 'Every Monday around sundown',
    location: 'The Karma Tree',
    description:
      'A weekly social gathering with food, drinks, and conversation. More of a community check-in than a meal — visitors are welcome to join their host.',
  },
]
