import { asText } from '@prismicio/client';

import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const page = await client.getByUID('page', 'home');



	const ownerTestimonials = await client.getSingle('testimonials')

	const contractorTestimonials = await client.getSingle('contractorTestimonials');

	return {

	
		ownerTestimonials,
		contractorTestimonials,

	};
}

export function entries() {
	return [{}];
}
