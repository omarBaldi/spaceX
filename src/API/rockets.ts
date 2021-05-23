class APIRocketCalls {
	_baseURL: string;
	constructor() {
		this._baseURL = 'https://api.spacexdata.com/v4';
	}
	async getAllRockets(): Promise<any | null> {
		const currentURL = `${this._baseURL}/rockets`;
		const response = await fetch(currentURL);
		if (!response) return;
		const data = response.json();
		return data;
	}
	getCurrentRocket(id: string): string {
		return `${this._baseURL}/rockets/${id}`;
	}
}

export const API_Rocket = new APIRocketCalls();
