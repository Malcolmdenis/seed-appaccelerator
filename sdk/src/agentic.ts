import type { SeedClientOptions } from './types';
import { SeedClient } from './client';

export class AgenticClient extends SeedClient {
	constructor(options: SeedClientOptions) {
		super(options);
	}

	override async build(prompt: string, options: Parameters<SeedClient['build']>[1] = {}) {
		return super.build(prompt, { ...options, behaviorType: options.behaviorType ?? 'agentic' });
	}
}
