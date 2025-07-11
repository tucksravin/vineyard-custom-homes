import { asText } from '@prismicio/client';

import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const page = await client.getByUID('page', 'home');

	const instagram = await client.getSingle('instagram_features')

	const ownerTestimonials = await client.getSingle('testimonials')

	const contractorTestimonials = await client.getSingle('contractorTestimonials');

	return {
		page,
		instagram,
		ownerTestimonials,
		contractorTestimonials,
		title: asText(page.data.title),
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image.url
	};
}

export function entries() {
	return [{}];
}
